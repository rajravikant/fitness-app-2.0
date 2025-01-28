import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import { hp, wp } from "@/utils/common";
import { theme } from "@/constants/theme";
import Button from "@/components/ui/Button";
import ScreenHeader from "@/components/navigation/ScreenHeader";



const Page = () => {
  const { strMealThumb
    ,strMeal,
    strArea,
    strCategory,
    ...rest
  } = useLocalSearchParams();


    let ingredients = [];
    for(let i = 1 ; i<= 20 ; i++){
      if(rest[`strIngredient${i}`]){
        ingredients.push({
          name : rest[`strIngredient${i}`],
          quantity : rest[`strMeasure${i}`]
        })
      }
    }

    
    
   
  return (
    <View style={styles.mainContainer}>
      <View>
       <ScreenHeader/>
        <Image
          source={{ uri: strMealThumb }}
          style={{
            height: hp(40),
            objectFit: "cover",
          }}
          transition={500}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 15,
            padding: 10,
            position: "absolute",
            bottom: 50,
            width: "100%",
          }}
        >
          <Text style={styles.tag}>{strCategory}</Text>
          <Text style={styles.tag}>{strArea}</Text>
          <Text style={styles.tag}>{"15 min"}</Text>
        </View>
      </View>
      <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 25}}>
        <View>
          <Text style={styles.title}>{strMeal}</Text>
            <Nutrition values={[100, 48, 60]} />
            <View>
              <Text style={[styles.title,{
                fontSize: theme.fontSizes.h3,
                color: theme.colors.primary,
                marginTop: 10,
                textAlign: "left",
              }]}>Ingredients</Text>
              <View style={{flexDirection: "column",paddingVertical: 10}}>
                {ingredients.map((ingredient,index)=>(
                 
                    <Text key={index} style={{
                      fontSize: theme.fontSizes.p,
                      fontFamily: theme.fonts.regular,
                      color: theme.colors.heading,
                    }} >{ingredient.name} - {ingredient.quantity}</Text>
                   
                 
                ))}
              </View>
            </View>

            <View style={{paddingVertical: 10}}>
              <Text style={[styles.title,{
                fontSize: theme.fontSizes.h3,
                color: theme.colors.primary,
                marginTop: 10,
                textAlign: "left",
              }]}>Instructions</Text>
              <Text style={{
                fontSize: theme.fontSizes.p,
                fontFamily: theme.fonts.regular,
                color: theme.colors.heading,
                textAlign: "left",
              }} >{rest.strInstructions}</Text>
            </View>
        </View>
        <View>
          <Button title="Add Meal" onPress={()=>{}}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default Page;

const Nutrition = ({ values }: { values: number[] }) => (
  <View style={styles.nutrition}>
    {values.map((value, index) => (
      <View style={styles.nutritionTextContainer} key={index} >
      <Text style={[styles.nutritionText]}>
        {index === 0 ? "Calories" : index === 1 ? "Protein" : "Carbs"}
      </Text>
      <Text style={[styles.nutritionText,{
       fontSize: theme.fontSizes.h2,
      }]}> {value}{index === 0 ? "kcal" : "gm"}</Text>
     </View>
    ))}
   
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: hp(100),
    width: wp(100),
  },
  container: {
    height: "65%",
    width: "100%",
    backgroundColor: "rgb(255,255,255)",
    paddingVertical: 15,
    paddingHorizontal: 15,
    position: "absolute",
    borderTopRightRadius: theme.borderRadius.xl,
    borderTopLeftRadius: theme.borderRadius.xl,
    bottom: 0,
    borderRadius: 20,
    // justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
  },

  tag: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(10px)",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    color: "black",
    fontFamily: theme.fonts.medium,
    fontSize: theme.fontSizes.p,
  },

  title: {
    fontSize: theme.fontSizes.h3,
    fontFamily: theme.fonts.medium,
    color: "black",
    textAlign: "center",

    width: "100%",
  },
  nutrition: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems : "center",
    borderRadius: 10,
  },
  nutritionTextContainer: {
    borderRadius: 10,
    // backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
  nutritionText:{
    fontFamily: theme.fonts.medium,
    fontSize: theme.fontSizes.p,
    color: theme.colors.heading,
  },
});
