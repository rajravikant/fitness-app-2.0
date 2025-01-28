import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { Radio } from "@/constants/types";
import { theme } from "@/constants/theme";

interface Props {
  options: Radio[];
  onSelected: (value: string) => void;
  selected: string;
  containerStyle?: object;
  radioStyle?: object;
  labelStyle?: object;
}
const RadioGroups = ({
  options,
  onSelected,
  radioStyle,
  selected,
  containerStyle,
  labelStyle,
}: Props) => {
  const [select, setSelect] = React.useState<string>(selected);
  return (
    <View style={[styles.container, containerStyle]}>
      {options.map((item, index) => (
        <Pressable
          key={index}
          style={[
            styles.radio,
            select === item.value && styles.selected,
            radioStyle,
          ]}
          onPress={(e) => {
            setSelect(item.value);
            onSelected(item.value);
          }}
        >
          {item.icon && item.icon}
          <Text style={[styles.label, labelStyle]}>{item.label}</Text>
          {item.desc && (
            <Text
              style={{
                textAlign: "left",
                fontFamily: theme.fonts.light,
                color: theme.colors.text,
              }}
            >
              {item.desc}
            </Text>
          )}
        </Pressable>
      ))}
    </View>
  );
};

export default memo(RadioGroups);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  radio: {
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    padding: 20,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 10,
    minWidth: 100,
  },
  label: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.medium,
    fontSize: theme.fontSizes.h3,
  },
  selected: {
    backgroundColor: theme.colors.shade,
  },
});
