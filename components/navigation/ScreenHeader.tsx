import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ScreenHeader = () => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top + 10 : 20;
  const isPresented = router.canGoBack();
  return (
    <View
      style={{
        position: "absolute",
        top: paddingTop,
        paddingHorizontal: 20,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex : 1000
      }}
    >
      <View>
        <Pressable
          onPress={() => isPresented && router.back()}
          style={styles.back_button}
        >
          <Ionicons name="chevron-back-sharp" size={24} color="white" />
        </Pressable>
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity onPress={() => {}} style={styles.back_button}>
          <Ionicons name="bookmark-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.back_button}>
          <Entypo name="dots-three-horizontal" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  back_button: {
    padding: 8,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    alignSelf: "flex-start",
    borderRadius: 10,
  },
});
