import { StyleSheet, Text, View } from "react-native";
import React, { memo, useCallback, useMemo, useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Step, UserPrefrenceType } from "@/constants/types";
import Gender from "@/components/profile/Gender";
import Height from "@/components/profile/Height";
import { useMultiForm } from "@/hooks/useMultiForm";
import Button from "@/components/ui/Button";
import { hp, wp } from "@/utils/common";
import Progress from "@/components/ui/Progress";
import Age from "@/components/profile/Age";
import Goal from "@/components/profile/Goal";
import ActivityLevel from "@/components/profile/ActivityLevel";
import Weight from "@/components/profile/Weight";
import { theme } from "@/constants/theme";
import Animated, { FadeInLeft, FadeOutRight } from "react-native-reanimated";
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';
import { router } from "expo-router";


const initialData: UserPrefrenceType = {
  age: "",
  weight: "",
  height: "",
  activityLevel: "",
  goal: "",
  gender: "",
};

const Page = () => {
  const [data, setData] = useState<UserPrefrenceType>(initialData);
  const updateData = useCallback((key: string, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const steps = [
    {
      id: "1",
      title: "Whats your gender",
      subTitle:
        "For the better experience and personalised plans for you we need to know your gender ",
      component: <Gender data={data.gender} updateData={updateData} />,
    },
    {
      id: "2",
      component: <Age data={data.age} updateData={updateData} />,
      title: "Whats your age",
      subTitle:
        "For the better experience and personalised plans for you we need to know your age ",
    },
    {
      id: "3",
      component: <Goal data={data.goal} updateData={updateData} />,
      title: "Whats your goal",
      subTitle:
        "For the better experience and personalised plans for you we need to know your goal ",
    },
    {
      id: "4",
      component: (
        <ActivityLevel data={data.activityLevel} updateData={updateData} />
      ),
      title: "Whats your activity level",
      subTitle:
        "For the better experience and personalised plans for you we need to know your activity level",
    },
    {
      id: "5",
      component: <Height data={data.height} updateData={updateData} />,
      title: "Whats your height",
      subTitle:
        "For the better experience and personalised plans for you we need to know your height ",
    },
    {
      id: "6",
      component: <Weight data={data.weight} updateData={updateData} />,
      title: "How much do you weigh",
      subTitle:
        "For the better experience and personalised plans for you we need to know your weight ",
    },
  ];

  const { step, next, back, currentStepIndex } = useMultiForm(steps);

  const swipeGestures = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.RIGHT).onEnd(next),
    Gesture.Fling().direction(Directions.LEFT).onEnd(back),
  )

  return (
    <ScreenWrapper >
      <GestureDetector gesture={swipeGestures}>
      <View style={styles.container}>
        <Progress
          steps={steps.map((step) => parseInt(step.id))}
          currentStepIndex={currentStepIndex}
        />
        <Animated.View
          entering={FadeInLeft}
          exiting={FadeOutRight}
          style={styles.contentWrapper}
          key={step.id}
        >
          <View style={{ alignItems: "center" }}>
            <Animated.Text style={styles.title}>{step.title}</Animated.Text>
            <Animated.Text style={styles.subTitle}>
              {step.subTitle}
            </Animated.Text>
          </View>
          {step.component}
        </Animated.View>

        <View style={styles.actions}>
          {currentStepIndex > 0 && (
            <Button
              title="Back"
              style={{ width: "50%" }}
              onPress={back}
              type="secondary"
            />
          )}
          <Button
            title={currentStepIndex === steps.length - 1 ? "Done" : "Next"}
            style={{ width: "50%", alignSelf: "flex-end" }}
            onPress={()=>{
              if (currentStepIndex === steps.length - 1) {
                return router.replace("/home")
              } else {
                next();
            }}
            }
          />
        </View>
      </View>
      </GestureDetector>
    </ScreenWrapper>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
    paddingVertical: hp(3),
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "100%",
    gap: 20,
  },
  actions: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  title: {
    fontSize: theme.fontSizes.h1,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
    textAlign: "center",
  },
  subTitle: {
    fontSize: theme.fontSizes.p,
    fontFamily: theme.fonts.regular,
    color: theme.colors.textLight,
    textAlign: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
