import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { theme } from "@/constants/theme";
import BackButton from "../ui/BackButton";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
// import { auth } from "@/utils/firebaseConfig";

const logoutAction = () => {
  // auth.signOut();
};

const LogoutButton = () => {
  return (
    <Pressable
      onPress={logoutAction}
      style={{
        padding: 8,
        backgroundColor: 'rgba(255,0,0,0.07)',
        alignSelf: "flex-start",
        borderRadius: 10,
      }}
    >
      <AntDesign name="logout" size={24} color='red' />
    </Pressable>
  );
};

interface HeaderProps {
  buttonBack?: boolean;
  mb?: number;
  title: string;
  logoutShow?: boolean;
}

const Header = ({ buttonBack, title, logoutShow, mb = 10 }: HeaderProps) => {
  const router = useRouter();
  return (
    <View style={[styles.container, { marginBottom: mb }]}>
      <View style={{flexDirection:'row',gap:5}}>
        {buttonBack && <BackButton router={router} />}
        {logoutShow && <LogoutButton />}
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: theme.colors.grey,
  },

  title: {
    fontSize: theme.fontSizes.h2,
    fontFamily: theme.fonts.medium,
    color: theme.colors.heading,
  },
});
