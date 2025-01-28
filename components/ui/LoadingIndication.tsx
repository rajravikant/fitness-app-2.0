import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { theme } from "@/constants/theme";

interface LoadingIndicationProps {
  size?: "small" | "large";
  color?: string;
  containerStyle?: {};
}
const LoadingIndication = ({
  size = "large",
  color = theme.colors.primary,
  containerStyle,
}: LoadingIndicationProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default memo(LoadingIndication);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
