import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { ComponentProps } from "react";
import { theme } from "@/constants/theme";
import { hp } from "@/utils/common";

interface ButtonProps extends ComponentProps<typeof TouchableOpacity> {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  style?: object;
  type?: "primary" | "secondary";
}

const Button = ({
  title,
  onPress,
  isLoading,
  style,
  disabled,
  type = "primary",
}: ButtonProps) => {
  let content = <Text style={[styles.text,
    type === "secondary" && { color: theme.colors.primary }
  ]}>{title}</Text>;

  if (isLoading) {
    content = (
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator
          size="small"
          color="white"
          style={{ marginRight: 10 }}
        />
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, 
        style,
        type === "primary" ? styles.primary : styles.secondary,
        disabled && styles.disabled]}
    >
      {content}
    </TouchableOpacity>
  );
};

 

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: theme.borderRadius.l,
    borderCurve: "continuous",
    width: "100%",
    height: hp(6),
  },
  text: {
    fontSize: 16,
    fontFamily: "Outfit-Regular",
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  primary: {
    backgroundColor: theme.colors.primary,
    elevation: 3,
  },

  secondary: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  disabled: {
    backgroundColor: theme.colors.grey,
  },
});
