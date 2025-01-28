import { StyleSheet, Text, View } from "react-native";
import React, { memo, useState } from "react";
import { Radio } from "@/constants/types";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "@/constants/theme";
import RadioGroups from "../ui/RadioGroups";

interface Props {
  data : string,
  updateData : (key: string, value: string) => void
}

const Gender = ({data,updateData}:Props) => {
  
  
  return (
    <View>
      <RadioGroups selected={data} onSelected={(val)=>updateData('gender',val.toString())} options={gender} radioStyle={{
        height : 150,
        width: 150,
      }} />
    </View>
  );
};

export default memo(Gender);

const styles = StyleSheet.create({
 
});

const gender: Radio[] = [
  {
    value: "male",
    label: "Male",
    icon: <Ionicons name="male" size={60} color={theme.colors.primary} />,
  },
  {
    value: "female",
    label: "Female",
    icon: <Ionicons name="female" size={60} color={theme.colors.primary} />,
  },
];
