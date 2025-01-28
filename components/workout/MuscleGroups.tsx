import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Fragment } from "react";
import { Image } from "expo-image";
import { theme } from "@/constants/theme";

const MuscleGroups = () => {
  return (
    <Fragment>
      <Text style={styles.title}>Muscle Group</Text>
      <View
        style={{
          paddingVertical: 10,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: 10,
        }}
      >
        {MuscleGroupsList.map((group) => (
          <TouchableOpacity style={styles.container} key={group.id}>
            <Image
              source={group.image}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              transition={1000}
            />
            <View style={styles.background}>
            <Text style={styles.text}>{group.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </Fragment>
  );
};

export default MuscleGroups;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    borderWidth: 1,
    borderColor: theme.colors.grey,
    borderRadius: 10,
    overflow: "hidden",
    height: 150,
    width: "45%",
  },
  text: {
    width: "100%",
    color: theme.colors.white,
    textAlign: "center",
    fontFamily: theme.fonts.thin,
    fontSize: theme.fontSizes.h2,
    zIndex: 5,
    textTransform : "uppercase",
  },
  background: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    height: "100%",
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.47)",
    justifyContent : "center",
    alignItems: "center",
  },
  title: {
    fontSize: theme.fontSizes.h2,
    fontFamily: theme.fonts.medium,
    color: theme.colors.heading,
  },
});

const MuscleGroupsList = [
  {
    id: 1,
    title: "Chest",
    image: require("../../assets/images/chest.jpg"),
  },
  {
    id: 2,
    title: "Back",
    image: require("../../assets/images/back.jpeg"),
  },
  {
    id: 3,
    title: "Shoulder",
    image: require("../../assets/images/Shoulder.jpg"),
  },
  {
    id: 4,
    title: "Biceps",
    image: require("../../assets/images/Biceps.jpg"),
  },
  {
    id: 5,
    title: "Triceps",
    image: require("../../assets/images/Triceps.jpg"),
  },
  {
    id: 6,
    title: "Legs",
    image: require("../../assets/images/Legs.jpg"),
  },
  {
    id: 7,
    title: "Abs",
    image: require("../../assets/images/Abs.jpg"),
  },
];
