import { Image, StyleSheet, Text, View } from "react-native";
import { hp, wp } from "@/utils/common";
import { theme } from "@/constants/theme";
import Button from "@/components/ui/Button";
import React from "react";
import { router } from "expo-router";
export default function Index() {
  return (
   
      <View style={styles.container}>
        <Image
          source={require("../assets/images/homebg.jpg")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />

        <View  style={styles.title_container}>
          <View  style={{ width: "100%", alignItems: "center" }}>
          <Text
              style={{
                fontSize: 38,
                fontFamily: theme.fonts.bold,
                color: theme.colors.primary,
              }}
            >
              B-Fit
            </Text>
            <Text
              style={{
                fontSize: theme.fontSizes.h3,
                fontFamily: theme.fonts.regular,
                color: theme.colors.textLight,
                marginVertical: 15,
                textAlign: "center",
                width: "70%",
              }}
            >
              Unlock your fitness potential at your comfort
            </Text>
          </View>
          <Button
            title="Get Started"
            onPress={() => {
              router.push("/(authenticated)/(tabs)/home");
            }}
          />
        </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: wp(100),
    height: hp(100),
    position: "relative",
  },
  title_container: {
    width: "100%",
    height: "50%",
    paddingHorizontal: theme.spacing.xl,
    position: "absolute",
    bottom: 0,
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "space-around",
    borderTopRightRadius: theme.borderRadius.xl,
    borderTopLeftRadius: theme.borderRadius.xl,
  },
});
