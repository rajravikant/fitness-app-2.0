import { View } from "react-native";
import React, { memo } from "react";
import { theme } from "@/constants/theme";
import { Radio } from "@/constants/types";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import RadioGroups from "../ui/RadioGroups";

interface Props {
  data: string;
  updateData: (key: string, value: string) => void;
}

const Goal = ({data,updateData}:Props) => {
  return (
    <View>
      <RadioGroups
        selected={data}
        options={goals}
        containerStyle={{ flexWrap: "wrap" }} radioStyle={{
          width: 150,
          height : 150,
        }} labelStyle={{ fontSize: 16 }}
        onSelected={(s) => {updateData('goal',s)}}
      />
    </View>
  );
};

export default memo(Goal);

const goals: Radio[] = [
  {
    value: "gain",
    label: "Gain Weight",
    icon: (
      <FontAwesome6
        name="weight-scale"
        size={50}
        color={theme.colors.primary}
      />
    ),
  },
  {
    value: "muscle",
    label: "Muscle Gain",
    icon: (
      <FontAwesome6 name="dumbbell" size={50} color={theme.colors.primary} />
    ),
  },
  {
    value: "lose",
    label: "Lose Weight",
    icon: (
      <FontAwesome6
        name="weight-scale"
        size={50}
        color={theme.colors.primary}
      />
    ),
  },
  {
    value: "maintain",
    label: "Maintain",
    icon: (
      <MaterialIcons
        name="monitor-weight"
        size={60}
        color={theme.colors.primary}
      />
    ),
  },
];
