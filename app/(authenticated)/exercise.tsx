import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { hp, wp } from "@/utils/common";
import { theme } from "@/constants/theme";
import { Stack, useLocalSearchParams } from "expo-router";
import ScreenHeader from "@/components/navigation/ScreenHeader";

import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

type Exercise = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string;
};

const IMG_HEIGHT = 500;
const Page = () => {
  const exercise: Exercise = useLocalSearchParams();

  const Descriptions = [
    { title: "Target", value: exercise.target },
    { title: "Equipements", value: exercise.equipment },
    { title: "Secondary muscles", value: exercise.secondaryMuscles },
    { title: "Body part", value: exercise.bodyPart },
  ];

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const ImageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 0.75]
          ),
        },
      ],
    };
  }, []);

  const AnimatedHeaderStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [0, IMG_HEIGHT / 2], [0, 1]),
    };
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.white }}>
      <Stack.Screen
        options={{
          headerShown : true,
          headerTransparent: true,
          header : ()=>  <Animated.View style={[styles.headerStyle, AnimatedHeaderStyle]} >
            <ScreenHeader  />
          </Animated.View>,
          // headerBackground: () => (
          //   <Animated.View style={[styles.headerStyle, AnimatedHeaderStyle]} />
          // ),
        }}
      />
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={10}
        showsVerticalScrollIndicator={false}
      >
        <Animated.Image
          source={{uri: exercise.gifUrl}}
          style={[styles.imageStyle, ImageAnimatedStyle]}
        />

        <View style={styles.descriptionContainer}>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.text}>{exercise.name}</Text>
          </View>

          <View
            style={{
              paddingVertical: 10,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            {Descriptions.map(({ title, value }, index) => (
              <View key={index} style={styles.box}>
                <Text
                  style={{
                    fontSize: theme.fontSizes.p,
                    fontFamily: theme.fonts.light,
                    color: theme.colors.light,
                    textAlign: "left",
                  }}
                >
                  {title}
                </Text>
                <Text style={styles.subtitle}>{value}</Text>
              </View>
            ))}
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.title}>Execution</Text>
            { exercise.instructions && (
            <View>
              {exercise.instructions.split(",").map((instr, key) => (
                <Text key={key} style={styles.instruction}>
                  {instr}
                </Text>
              ))}
            </View>
            )}
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  imageStyle: {
    width: wp(100),
    height: IMG_HEIGHT,
    objectFit: "contain",
  },

  details: {
    padding: 20,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: theme.colors.light,
    fontSize: theme.fontSizes.h2,
    fontFamily: theme.fonts.regular,
    textTransform: "capitalize",
  },
  title: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.h2,
    fontFamily: theme.fonts.regular,
    textTransform: "capitalize",
  },
  descriptionContainer: {
    height: hp(80),
    padding: 20,
    backgroundColor: theme.colors.dark,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  instruction: {
    color: theme.colors.textLight,
    fontSize: theme.fontSizes.p,
    fontFamily: theme.fonts.regular,
    paddingVertical: 5,
  },
  tag: {
    fontSize: theme.fontSizes.h3,
    fontFamily: theme.fonts.regular,
    marginVertical: 5,
    backgroundColor: theme.colors.shade,
    color: theme.colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  box: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    minWidth : 160,
    justifyContent: "space-between",
    gap: 5,
    backgroundColor: "rgba(147, 145, 145, 0.13)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
  },
  subtitle: {
    fontSize: theme.fontSizes.p,
    fontFamily: theme.fonts.semibold,
    color: "#fff",
    textAlign: "left",
  },
  headerStyle: {
    backgroundColor: "#fff",
    height: hp(12),
  },
});
