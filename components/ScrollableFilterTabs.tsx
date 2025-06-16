import { StyleSheet} from "react-native";
import React, { useState } from "react";
import { FilterTab } from "./Filters";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";


interface Props {
    options: string[];
    selected?: string;
    onSelect: (item: string) => void;
  }



const ScrollableFilterTabs = ({options,onSelect,selected}:Props) => {
     const [filter, setFilter] = useState<string | null>(selected || null);
  return (
    <BottomSheetFlatList
      data={options}
      renderItem={({ item }) => <FilterTab value={item}
        filter={filter!} onFilter={setFilter} onSelect={onSelect} 
      />}
      horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flexWrap : 'wrap'}}
      keyExtractor={(item,index) => index.toString()}
     
    />
  );
};

export default ScrollableFilterTabs;

const styles = StyleSheet.create({});
