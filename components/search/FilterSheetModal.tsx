import { View, Text, StyleSheet } from "react-native";
import React, { Fragment, useCallback, useMemo } from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetFooter,
  BottomSheetFooterProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import Filters from "@/components/Filters";
import { Separator } from "@/app/(authenticated)/search";
import { theme } from "@/constants/theme";
import Button from "@/components/ui/Button";

interface FilterSheetModalProps {
  onFilterChange: (filter: string) => void;
  bottomSheetRef: React.RefObject<BottomSheet>;
  filterOption: "Workout" | "Diet";
}

const FilterSheetModal = ({
  onFilterChange,
  filterOption,
  bottomSheetRef,
}: FilterSheetModalProps) => {
  const snapPoints = useMemo(() => ["20%"], []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  // const renderFooter = useCallback(
  //   (props: BottomSheetFooterProps) => (
  //     <BottomSheetFooter {...props} bottomInset={5}>
  //       <View style={styles.footerContainer}>
  //         <Button
  //           title="Apply"
  //           onPress={() => bottomSheetRef.current?.close()}
  //         />
  //       </View>
  //     </BottomSheetFooter>
  //   ),
  //   []
  // );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      index={-1}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView style={styles.contentContainer}>
        <View style={styles.filter}>
          {/* {filterOption === "Workout" && <WorkoutFilters />} */}

          {/* {filterOption === "Diet" && <DietFilters />} */}
          <Text style={styles.filter_text}>Search for</Text>
           <Filters
                    options={["Workout", "Diet"]}
                    selected="Diet"
                    tabStyle={{ flex: 1 }}
                    containerStyle={{ paddingVertical: 10 }}
                    onSelect={(item: string) => {
                      onFilterChange(item as "Workout" | "Diet");
                    }}
                  />
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default FilterSheetModal;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  filter: {
    width: "100%",
    padding: 20,
  },
  filter_text: {
    color: theme.colors.heading,
    fontSize: theme.fontSizes.p,
    fontFamily: theme.fonts.regular,
    marginBottom: 10,
  },
  footerContainer: {
    padding: 20,
    backgroundColor: theme.colors.shade,
  },
});

const WorkoutFilters = () => (
  <Fragment>
    <View>
      <Text style={styles.filter_text}>Fitness Level</Text>
      <Filters
        onSelect={(item) => {
          console.log(item);
        }}
        options={["Beginner", "Intermediate", "Advanced"]}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.filter_text}>Body Parts</Text>
      <Filters
        onSelect={(item) => {
          console.log("Muscle", item);
        }}
        options={[
          "back",
          "cardio",
          "chest",
          "lower arms",
          "lower legs",
          "neck",
          "shoulders",
          "upper arms",
          "upper legs",
          "waist",
        ]}
      />
    </View>
  </Fragment>
);

const DietFilters = () => (
  <Fragment>
    <View>
      <Text style={styles.filter_text}>Diet Type</Text>
      <Filters
        onSelect={(item) => {
          console.log(item);
        }}
        options={["Vegetarian", "Non Vegetarian", "Vegan"]}
      />
    </View>
  </Fragment>
);
