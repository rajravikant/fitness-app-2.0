import { Exercise } from "@/constants/data";
import { theme } from "@/constants/theme";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";


export const ExerciseItem = ({
  bodyPart,
  equipment,
  id,
  name,
  target,
}: Exercise) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => {router.push({
          pathname : "/exercise",
          params: {
            id,
            name,
            bodyPart,
            equipment,
            target,
          },
        })}}>
          <FontAwesome5 name="play-circle" size={30} color="#9381ff" />
        </TouchableOpacity>
        <Text style={styles.title}>{name.length > 30 ? name.substring(0,39)+"..." : name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderColor: theme.colors.grey,
    marginVertical: 10,
    backgroundColor: theme.colors.white,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: theme.fontSizes.p,
    fontFamily: theme.fonts.regular,
    color: theme.colors.heading,
    textAlign: "left",
    marginLeft: 10,
  },
  subtitle: {
    fontSize: theme.fontSizes.p,
    fontFamily: theme.fonts.regular,
    color: theme.colors.heading,
  },
});
