import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { theme } from "@/constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { hp, wp } from "@/utils/common";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

interface WorkoutListItemProps {
  id: number;
  title: string;
  image: any;
  duration: string;
  level: string;
  kcal: string;
  type: string;
}

const WorkoutListItem = ({
  id,
  title,
  image,
  duration,
  level,
  kcal,
  type,
}: WorkoutListItemProps) => {
  return (
    <TouchableOpacity onPress={() => {
      router.push({
        pathname : "/workoutplan",
        params :{
            id,
            title,
            image,
            duration,
            level,
            kcal,
            type
        }
      });
    }} style={styles.container}>
      <View style={styles.image}>
        <Image
          source={{
            uri: "https://cdn.shopify.com/s/files/1/0471/3332/7519/files/biceps-for-beginners-header.jpg?v=1729548586",
          }}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          transition={1000}
        />
      </View>
      <View style={styles.desc}>
        <Text style={styles.title}>
          {title.length > 30 ? title.substring(0, 30) + "..." : title}
        </Text>
        <Text style={styles.desriptionText}>{duration}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default WorkoutListItem;

const styles = StyleSheet.create({
  container: {
    height: hp(12),
    width: wp(90),
    flexDirection: "row",
    marginVertical: 10,
  },
  image: {
    backgroundColor: theme.colors.shade,
    height: "100%",
    width: "40%",
    position: "relative",
    borderRadius: 10,
    overflow: "hidden",
  },

  title: {
    fontSize: theme.fontSizes.h3,
    fontFamily: theme.fonts.regular,
  },
  desriptionText: {
    fontSize: 13,
    fontFamily: theme.fonts.medium,
    color: theme.colors.primary,
  },
  desc: {
    flexDirection: "column",
    width: "60%",
    marginLeft: 15,
  },
});
