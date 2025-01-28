import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { memo, useCallback, useMemo, useRef } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
  BottomSheetModalProvider,
  BottomSheetFooter,
  BottomSheetFooterProps,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import Header from "@/components/navigation/Header";
import Avatar from "@/components/ui/Avatar";
import { theme } from "@/constants/theme";
import Feather from "@expo/vector-icons/Feather";
import InputField from "@/components/ui/InputField";
import Button from "@/components/ui/Button";
import { Link } from "expo-router";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import { hp } from "@/utils/common";
const Page = () => {
  const bottomSheetModalRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["40%"], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const handleEdit = (key: object) => {
    bottomSheetModalRef.current?.expand();
  };

  const renderFooter = useCallback(
    (props:BottomSheetFooterProps) => (
      <BottomSheetFooter {...props} bottomInset={24}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            gap: 5,
          }}
        >
          <Button
            title="Cancel" type="secondary"
            style={{width : '50%'}}
            onPress={() => {
              bottomSheetModalRef.current?.close();
            }}
          />
          <Button title="Save" style={{width : '50%'}}  onPress={() => {}} />

        </View>
      </BottomSheetFooter>
    ),
    []
  );

  const renderBackdrop = useCallback(
		(props:BottomSheetBackdropProps) => (
			<BottomSheetBackdrop
				{...props}
				disappearsOnIndex={0}
				appearsOnIndex={1}
			/>
		),
		[]
	);


  return (
    <GestureHandlerRootView >
    <BottomSheetModalProvider>
      <ScreenWrapper>
        <Header title="Profile" buttonBack  />
        <ScrollView style={styles.profile} showsVerticalScrollIndicator={false}>
          <View>
            <Avatar
              style={{
                alignSelf: "center",
                borderWidth: 2,
                borderColor: theme.colors.grey,
                position: "relative",
              }}
              uri="https://i.pravatar.cc/300"
              size={200}
              rounded={15}
            />
            <Pressable
              style={styles.edit}
              onPress={() => bottomSheetModalRef.current?.snapToIndex(0)}
            >
              <Feather name="edit-2" size={20} color="black" />
            </Pressable>
          </View>

          <View
            style={{
              marginVertical: 20,
              alignSelf: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: theme.fontSizes.h2, fontWeight: "bold" }}>
              Priya Rani
            </Text>
            <Text
              style={{
                fontSize: theme.fontSizes.p,
                color: theme.colors.textLight,
              }}
            >
              Jon@gmail.com
            </Text>

            <Link href={"/"} style={{ marginTop: 10 }}>
              <Text
                style={{
                  fontSize: theme.fontSizes.p,
                  color: theme.colors.primary,
                }}
              >
                Preference Settings
              </Text>
            </Link>
          </View>

          {/* profile info tabs */}
          <View
            style={{
              width: "100%",
              gap: 10,
            }}
          >
            {tabs.map((tab, index) => (
              <View style={styles.tab} key={index}>
                <Text style={styles.span}>{tab.title}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.text}>{tab.value}</Text>
                  <TouchableOpacity onPress={() => handleEdit(tab)}>
                    <Feather name="chevron-right" size={20} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

          <View style={{marginVertical:hp(5)}}>
            <Button title="Logout" type="secondary" onPress={() => {}} />
          </View>
        </ScrollView>


        <BottomSheet
          ref={bottomSheetModalRef}
          onChange={handleSheetChanges}
          footerComponent={renderFooter}
          backdropComponent={renderBackdrop}
          snapPoints={snapPoints}
          index={-1}
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text
              style={{
                fontSize: theme.fontSizes.h3,
                fontFamily: theme.fonts.medium,
                marginBottom: 20,
              }}
            >
              Goal
            </Text>
            <InputField onChangeText={() => {}} value=""
              placeholder="Muscle Building"
            />
          </BottomSheetView>
        </BottomSheet>
      </ScreenWrapper>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default memo(Page);

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    width: "100%",
  },
  input: {
    marginBottom: 10,
  },
  footerContainer: {},
  tab: {
    padding: 10,
    borderRadius: 10,
    gap: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: theme.colors.grey,
  },

  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },

  text: {
    fontSize: theme.fontSizes.h3,
    fontFamily: theme.fonts.medium,
    color: theme.colors.heading,
  },
  span: {
    fontSize: theme.fontSizes.p,
    color: theme.colors.textLight,
    fontFamily: theme.fonts.regular,
  },

  edit: {
    position: "absolute",
    bottom: -10,
    right: "20%",
    backgroundColor: theme.colors.light,
    padding: 10,
    borderRadius: 100,
    elevation: 2,
    borderWidth: 1,
    borderColor: theme.colors.grey,
  },
});

const tabs = [
  {
    title: "Goal",
    value: "Muscle Building",
  },
  {
    title: "Experience",
    value: "Beginner",
  },
  {
    title: "Weight",
    value: "70kg",
  },
  {
    title: "Height",
    value: "5'9",
  },
  {
    title: "Age",
    value: "25",
  },
];
