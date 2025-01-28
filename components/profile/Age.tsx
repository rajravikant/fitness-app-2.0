import { StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { theme } from "@/constants/theme";
import WheelPicker from "../ui/WheelPicker";

interface Props {
  data: string;
  updateData: (key: string, value: string) => void;
}

const Age = ({ data, updateData }: Props) => {
  
  return (
    <View>
      <WheelPicker
        selected={data}
        values={Ages}
        onValueChange={(s) => {
          updateData("age", s.toString());
        }}
      />
    </View>
  );
};

export default Age;

const styles = StyleSheet.create({});

const Ages = [
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
];
