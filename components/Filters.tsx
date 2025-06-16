import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { theme } from "@/constants/theme";

interface FilterProps {
  options: string[];
  selected?: string;
  onSelect: (item: string) => void;
  containerStyle?: object;
  tabStyle?: object;
}

const Filters = ({
  options,
  selected,
  onSelect,
  containerStyle,
  tabStyle,
}: FilterProps) => {
  const [filter, setFilter] = useState<string | null>(selected || null);
  return (
     <View style={[styles.responsiveContainer,containerStyle && containerStyle]}>
               {options.map((item, index) => (
                 <TouchableOpacity
                   key={index}
                   style={[
                     styles.tab,
                     {
                       backgroundColor:
                         filter === item
                           ? theme.colors.primary
                           : theme.colors.grey,
                     },
                      tabStyle && tabStyle
                   ]}
                   onPress={() => {
                      setFilter(item);
                      onSelect(item)
                   }}
                 >
                   <Text
                     style={[
                       styles.text,
                       {
                         color:
                           filter === item
                             ? theme.colors.white
                             : "rgba(0,0,0,0.5)",
                       },
                     ]}
                   >
                     {item}
                   </Text>
                 </TouchableOpacity>
               ))}
             </View>
    
  );
};

export default Filters;

const styles = StyleSheet.create({
  responsiveContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems : "center",
    gap: 10,
  },

  tab: {
    alignItems: "center",
    backgroundColor: theme.colors.grey,
    padding: 10,
    minWidth: 110,
    borderRadius: 10,
  },

  text: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.p,
    fontFamily: theme.fonts.light,
  },
});

export const FilterTab = ({
  filter,
  value: item,
  onSelect,
  onFilter: setFilter,
  tabStyle,
}: {
  filter: string;
  value: string;
  onSelect: (key: string) => void;
  onFilter: (key: string) => void;
  tabStyle?: object;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.tab,
        {
          backgroundColor:
            filter === item ? theme.colors.primary : theme.colors.grey,
        },
        tabStyle && tabStyle,
      ]}
      onPress={() => {
        setFilter(item);
        onSelect(item);
      }}
    >
      <Text
        style={[
          styles.text,
          {
            color: filter === item ? theme.colors.white : "rgba(0,0,0,0.5)",
          },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};
