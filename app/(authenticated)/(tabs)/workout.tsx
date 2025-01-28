import { ScrollView } from "react-native";
import React, { memo } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import Header from "@/components/navigation/Header";
import WorkoutLists from "@/components/workout/WorkoutLists";
import MuscleGroups from "@/components/workout/MuscleGroups";
import FeautredWorkout from "@/components/workout/FeautredWorkout";

const Workout = () => {
  return (
    <ScreenWrapper>
      <Header title="Workout" buttonBack />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FeautredWorkout />
        <WorkoutLists />
        <MuscleGroups />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default memo(Workout);

