import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, {
  Fragment,
  memo,
  useRef,
  useState,
} from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import InputField from "@/components/ui/InputField";
import Header from "@/components/navigation/Header";
import { theme } from "@/constants/theme";
import {wp } from "@/utils/common";
import SearchItem from "@/components/search/SearchItem";
import IconButton from "@/components/ui/IconButton";
import Filters from "@/components/Filters";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { getMeals } from "@/api/meals";
import { useDebounce } from "@/hooks/useDebounce";
import { getExercisesByBodyPart } from "@/api/exercises";
import BottomSheet from "@gorhom/bottom-sheet";
import FilterSheetModal from "@/components/search/FilterSheetModal";



const Page = () => {
  const [filterOption, setFilterOption] = useState<"Workout" | "Diet">("Diet");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const bottomSheetRef = useRef<BottomSheet>(null);
  
  const {
    data: meals,
    error: mealError,
    isError,
    isFetching: isMealFetching,
  } = useQuery({
    queryKey: ["meals", debouncedSearchTerm],
    queryFn: () => getMeals(debouncedSearchTerm),
    enabled: filterOption === "Diet" && !!debouncedSearchTerm,
  });

  const {
    data,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["exercises", debouncedSearchTerm],
    queryFn: ({ pageParam }) =>
    getExercisesByBodyPart(debouncedSearchTerm, pageParam , 5),
    enabled: filterOption === "Workout" && !!debouncedSearchTerm,
    initialPageParam: 0,
    getNextPageParam: (lastpage, pages) => pages.length + 1,
  });

  const renderList = () => {
    if (filterOption === "Diet") {
      if (isMealFetching) {
        return <ActivityIndicator size="small" color={theme.colors.primary} />;
      }

      if (isError || !meals) {
        return (
          <Text style={styles.noMealText}>
            {mealError?.message || "Meal not found"}
          </Text>
        );
      }

      return (
        <FlatList
          data={meals}
          keyExtractor={(item) => item.idMeal}
          renderItem={({ item }) => <SearchItem type="meals" item={item} />}
          contentContainerStyle={{ paddingBottom: 10 }}
          ItemSeparatorComponent={() => <Separator />}
          showsVerticalScrollIndicator={false}
        />
      );
    }
    if (filterOption === "Workout") {
      if (isFetching && !isFetchingNextPage) {
        return <ActivityIndicator size="small" color={theme.colors.primary} />;
      }

      if (data?.pages.flat()[0].error || !data?.pages) {
        return <Text>Something went wrong</Text>;
      }
      if(searchTerm.length > 0) return(
          <React.Fragment>
          <FlatList
              data={data?.pages.flat()}
              keyExtractor={(item, index) => item.id + index}
              renderItem={({ item }) => (
                <SearchItem item={item} type="exercises" />
              )}
              contentContainerStyle={{ paddingBottom: 10 }}
              ItemSeparatorComponent={() => <Separator />}
              showsVerticalScrollIndicator={false}
              onEndReached={() => fetchNextPage()}
            /> 
            
            {isFetchingNextPage && (
              <View style={{ paddingVertical: 10 }}>
                <ActivityIndicator size="small" color={theme.colors.primary} />
              </View>
            )}
          </React.Fragment>
        );
      
    }
  };

  const renderOptions = () => {
    return(
      <View>
        <FlatList data={["back",
          "cardio",
          "chest",
          "lower arms",
          "lower legs",
          "neck",
          "shoulders",
          "upper arms",
          "upper legs",
          "waist"]} 
          renderItem={
            ({item}) => (
              <TouchableOpacity style={styles.tab} onPress={()=>setSearchTerm(item)} >
                <Text style={{
                  color: theme.colors.heading,
                  fontSize: 12,
                  fontFamily: theme.fonts.regular,
                  textTransform: "capitalize"
                }}>{item}</Text>
              </TouchableOpacity>
            )
          }
          keyExtractor={(item,index) => index.toString()}
          horizontal
          contentContainerStyle={{gap : 5}}
          />

      </View>
    )
  }

  return (
    <Fragment>
      <ScreenWrapper>
        <Header title="Search" buttonBack />

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "80%" }}>
            <InputField
              placeholder="Search"
              onChangeText={(e) => setSearchTerm(e)}
              value={searchTerm}
            />
          </View>
          <View style={{ width: "15%" }}>
            <IconButton onPress={() => bottomSheetRef.current?.snapToIndex(0)} />
          </View>
        </View>

       <Separator/>
       {renderOptions()}
       <Separator/>
        {renderList()}
        
      </ScreenWrapper>
      
      <FilterSheetModal bottomSheetRef={bottomSheetRef}
        filterOption={filterOption}
        onFilterChange={(item)=>{setFilterOption(item as "Workout" | "Diet")}}
      />
    </Fragment>
  );
};

export default memo(Page);

export const Separator = () => <View style={{ marginVertical: 10 }} />;

const styles = StyleSheet.create({
  
  tab: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.shade,
    padding: 5,
    borderRadius: theme.borderRadius.full,
  },


  noMealText: {
    color: theme.colors.heading,
    fontSize: theme.fontSizes.p,
    fontFamily: theme.fonts.regular,
  },
});
