import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import WorkoutListItem from "./WorkoutListItem";
import { theme } from "@/constants/theme";
import Filters from "../Filters";

const WorkoutLists = () => {
  return (
    <View>
      <View
        style={{
          marginVertical: 20,
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>Workouts</Text>
        <TouchableOpacity>
          <Text style={styles.seAll}>View all</Text>
        </TouchableOpacity>
      </View>

      <Filters
        options={[
          "Yoga",
          "Strength",
          "Cardio",
          "Weight Loss",
          "Weight Gain",
          "Muscle Gain",
          "Flexibility",
          "Endurance",
          "Balance",
          "Rehabilitation",
        ]}
      />

      <View style={{ marginVertical: 20 }}>
        <FlatList
          data={WorkoutsLists}
          renderItem={(item) => {
            return (
              <WorkoutListItem
                id={item.item.id}
                title={item.item.title}
                image={item.item.image}
                duration={item.item.duration}
                level={item.item.level}
                kcal={item.item.kcal}
                type={item.item.type}
              />
            );
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default WorkoutLists;

const styles = StyleSheet.create({
  title: {
    fontSize: theme.fontSizes.h2,
    fontFamily: theme.fonts.medium,
    color: theme.colors.heading,
  },
  subTitle: {
    fontSize: theme.fontSizes.p,
    fontFamily: theme.fonts.regular,
    color: "black",
    width: "100%",
  },
  seAll: {
    fontSize: theme.fontSizes.p,
    fontFamily: theme.fonts.regular,
    color: theme.colors.primary,
    backgroundColor: theme.colors.shade,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
});

const WorkoutsLists = [
  {
    id: 1,
    title: "Full Body Workout",
    image: "https://placehold.co/600x400",
    duration: "15 min",
    level: "Beginner",
    kcal: "250",
    type: "Weight Gain",
  },
  {
    id: 2,
    title: "HITT Workout",
    image: "https://placehold.co/600x400",
    duration: "20 min",
    level: "intermediate",
    kcal: "450",
    type: "Muscle Gain",
  },
  {
    id: 3,
    title: "Yoga",
    image: "https://placehold.co/600x400",
    duration: "30 min",
    level: "Advanced",
    kcal: "350",
    type: "Weight Loss",
  }
];
