import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { theme } from "@/constants/theme";

interface Props {
  steps: number[];
  currentStepIndex: number;
  containerStyle?: object;
  progressStyle?: object;
}

const Progress = ({
  steps,
  currentStepIndex,
  containerStyle,
  progressStyle,
}: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {steps.map((step, index) => (
        <View
          key={index}
          style={[
            styles.step,
            progressStyle && progressStyle,
            {
              backgroundColor:
                currentStepIndex === index ? theme.colors.primary : "#EAEAEB",
            },
          ]}
        ></View>
      ))}
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    width: "100%",
  },
  step: {
    flex: 1,
    height: 8,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
 
});
