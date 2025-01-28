import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "@/constants/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import Avatar from "../ui/Avatar";
import { Ionicons } from "@expo/vector-icons";
import { hp, wp } from "@/utils/common";
import { useSafeAreaInsets } from "react-native-safe-area-context";



const HomeHeader = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={[styles.header,{paddingTop:top}]}>
      <Text style={styles.header_title}>B-Fit</Text>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => router.push("/profile")}>
          <Avatar
            uri={"https://avatar.iran.liara.run/public/46"}
            size={hp(4)}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>router.push('/notification')}>
          <Ionicons name="notifications-sharp" size={hp(3)} color={theme.colors.text} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/(authenticated)/search")}>
          <Ionicons name="search" size={hp(3)} color={theme.colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header_title: {
    fontSize: theme.fontSizes.h1,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text,
    letterSpacing: 1,
  },
  header: {
    height: hp(12),
    backgroundColor: 'rgb(255,255,255)',
    paddingHorizontal: wp(5),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
    
  actions: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 20,
  },
});
