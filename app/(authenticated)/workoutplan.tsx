import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import { theme } from "@/constants/theme";
import { exercies, Exercise } from "@/constants/data";
import { ExerciseItem } from "@/components/workout/ExerciseItem";
import { hp } from "@/utils/common";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import ScreenHeader from "@/components/navigation/ScreenHeader";

const Page = () => {
  const { title, duration, kcal, level, type, id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://www.mensfitness.com/.image/t_share/MTk2MTM3Mjg3NjkxNjc1MTQx/man-exercising-in-gym.jpg",
        }}
        style={{
          width: "100%",
          height: hp(40),
          alignSelf: "center",
          objectFit: "fill",
        }}
        transition={1000}
      />
      <ScreenHeader />
      <ScrollView style={styles.descrpiton_container} showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.tag}>{type}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.desc}>
            {duration} •{"3 Set"} •{"30 seconds rest between sets"}
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 10,
            flexDirection: "row",
            flexWrap: "wrap",
            // justifyContent: "space-evenly",
            alignItems: "flex-start",
            gap: 10,
          }}
        >
          {Descriptions.map(({ title, value }, index) => (
            <View key={index} style={styles.box}>
              <Text
                style={{
                  fontSize: theme.fontSizes.p,
                  fontFamily: theme.fonts.light,
                  color: theme.colors.textLight,
                  textAlign: "left",
                }}
              >
                {title}
              </Text>
              <Text style={styles.subtitle}>{value}</Text>
            </View>
          ))}
        </View>
          {
            exercies.map((exercies,index) => (
              <ExerciseItem key={index} {...exercies} />
            ))
          }
        
      </ScrollView>
    </View>
  );
};

const Descriptions = [
  { title: "Total exercises", value: "6" },
  { title: "Equipments", value: "Gym" },
  { title: "Level", value: "Intermediate" },
  { title: "Total calories burned", value: "5000 Kcal" },
];

{
}

export default Page;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    width: "100%",
  },
  descrpiton_container: {
    padding: 20,
    width: "100%",
    backgroundColor: "white",
    height: "100%",
  },
  title: {
    fontSize: theme.fontSizes.h2,
    fontFamily: theme.fonts.bold,
    color: theme.colors.heading,
  },
  subtitle: {
    fontSize: theme.fontSizes.p,
    fontFamily: theme.fonts.semibold,
    color: "black",
    textAlign: "left",
  },
  tag: {
    fontSize: theme.fontSizes.p,
    fontFamily: theme.fonts.semibold,
    color: theme.colors.primary,
    textAlign: "left",
  },
  desc: {
    fontSize: theme.fontSizes.p,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
  },
  box: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
    gap: 5,
    backgroundColor: theme.colors.grey,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.grey,
  },
  
});

