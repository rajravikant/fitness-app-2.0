import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { theme } from "@/constants/theme";

interface WheelPickerProps {
  values: string[];
  onValueChange: (value: string) => void;
  selected: string;
  style?: object;
}

const WheelPicker = ({
  values,
  onValueChange,
  style,
  selected,
}: WheelPickerProps) => {

    const [selectValue, setSelectedValue] = React.useState<string >(selected);
  return (
    <View style={[styles.container, style]}>
  
    <ScrollView  horizontal style={styles.scroll} showsHorizontalScrollIndicator={false}>
        {values.map((value,index) => (
          <Pressable
            style={[
              styles.values,
                value === selectValue && styles.selected,
            ]}
            key={value}
            onPress={() => {
                setSelectedValue(value);
                onValueChange(value);
            }}
          >
            <Text style={styles.text}>{value}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default WheelPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  scroll:{
    paddingVertical: 25,
    
  },
  selected :{ 
    backgroundColor: theme.colors.shade,
    borderRadius: 10,
  },
  values: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: theme.fontSizes.h3,
    color: theme.colors.primary,
    fontFamily: theme.fonts.medium,
  },
});
