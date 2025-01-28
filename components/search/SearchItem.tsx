import { Alert, StyleSheet, Text, Pressable, View } from "react-native";
import React, { FC } from "react";
import { Image } from "expo-image";
import { theme } from "@/constants/theme";
import { hp } from "@/utils/common";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";




interface SearchItemProps {
  item: any;
  type : "meals" | "exercises"
}

const SearchItem = ({item,type}:SearchItemProps) => {
    
  return (
    <View style={styles.container} >
      <View style={styles.image}>
        <Pressable style={{position : "absolute" , right : 5 ,top:5,zIndex:5}} onPress={
            ()=> Alert.alert("Added to Favourites",item.idMeal)
        } >
            <MaterialCommunityIcons name="heart" size={24} color={theme.colors.danger} />
        </Pressable>
        <Link href={{
          pathname : type === "meals" ? "/mealdetails" : "/exercise",
          params : {...item}
        }}  >
        <Image source={{ uri: type === "meals" ? item.strMealThumb : item.gifUrl }}
        style={{
            height:"100%",
            width : "100%",
            objectFit : "cover"
        }}  
        transition={1000}
        /> 
        </Link>
        
      </View>
     
       
      <View style={styles.desc}>
        <View style={{flexDirection: "row",gap: 10 }}>
       {type === "meals" && ( <Text style = {styles.desriptionText}>{item.strCategory} • {item.strArea}</Text>)}
       {type === "exercises" && ( <Text style = {styles.desriptionText}>{item.bodyPart}</Text>)}
        </View>
        <Text style={styles.title}>{type === "meals" ? item.strMeal : item.name}</Text>
        <View style={{flexDirection : "row",gap:8,flexWrap:"wrap",paddingVertical  : 5}}>
          
          {type === "meals" && item.strTags?.split(",").map((tag:string,index:number)=>(
            <Text key={index} style={styles.tag}>{tag}</Text>
          ))}
          {type === "exercises" && item.secondaryMuscles.map((tag:string,index:number)=>(
            <Text key={index} style={styles.tag}>{tag}</Text>
          )) }
        </View>
      </View>
  
    </View>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.grey,
    overflow: "hidden",
    
  },
  image: {
    position: "relative",
    height : hp(20),
    width: "100%",
  },
  title: {
    fontSize: theme.fontSizes.p,
    fontFamily: theme.fonts.regular,
    color: theme.colors.heading,
    marginVertical: 5,
  },
  desriptionText: {
    fontSize: 13,
    fontFamily: theme.fonts.regular,
    color: theme.colors.primary,
  },
  tag: {
    backgroundColor: theme.colors.shade,
    padding: 5,
    borderRadius: 5,
    color: theme.colors.primary,
    fontFamily : theme.fonts.regular,
  },
  desc : {
    flexDirection: "column",
    backgroundColor: theme.colors.white,
    padding: 10,
  }
});
