import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { theme } from "@/constants/theme";
import { hp, wp } from "@/utils/common";
import Card from "@/components/ui/Card";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import FeautredWorkout from "@/components/workout/FeautredWorkout";

const Page = () => {
  return (
    <ScrollView style={styles.Page} showsVerticalScrollIndicator={false}>
      <StatusBar style="dark" />

      <View style={{ marginHorizontal: theme.spacing.l,paddingBottom:10 }}>
        <Text
          style={{
            fontSize: theme.fontSizes.h3,
            fontFamily: theme.fonts.light,
          }}
        >
          Good Morning,
        </Text>
        <Text
          style={{
            fontSize: theme.fontSizes.h1,
            fontFamily: theme.fonts.regular,
          }}
        >
          John Doe
        </Text>
      </View>

      <View style={styles.activity}>
          <FeautredWorkout />
      </View>

      <View style={styles.activity_charts}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Card style={{ width: "47%" }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.cardtitle}>Sleep</Text>
              <MaterialCommunityIcons
                name="power-sleep"
                size={24}
                color={theme.colors.primary}
              />
            </View>
            <Text style={{ fontSize: 16, fontFamily: theme.fonts.medium }}>
              8 hours
            </Text>
          </Card>
          <Card style={{ width: "47%" }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.cardtitle}>Heart</Text>
              <MaterialCommunityIcons
                name="heart-pulse"
                size={24}
                color={theme.colors.primary}
              />
            </View>

            {/* <AreaChartCustom
              data={[
                0, 20, -20, 10, 20, 0, 85, -80, 35, 53, -53, 24, 50, -20, 0,
              ]}
            /> */}

            <Text style={{ fontSize: 16, fontFamily: theme.fonts.medium }}>
              9 Bpm
            </Text>
          </Card>
        </View>
        <Card style={{ width: "100%", marginTop: 20, gap: 10 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.cardtitle}>Workout Progress</Text>
            <MaterialCommunityIcons
              name="weight-lifter"
              size={24}
              color={theme.colors.primary}
            />
          </View>

          {/* <LineChartCustom data={[2, 4, 3, 4, 3, 4]} /> */}
        </Card>
        <Card style={{ width: "100%", marginVertical: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.cardtitle}>Nutrution and Diet</Text>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons name="chevron-forward-circle" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

export default memo(Page);

const styles = StyleSheet.create({
  activity_charts: {
    width: wp(100),
    backgroundColor: "rgba(147, 129, 255, 0.08)",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: hp(5),
    padding: theme.spacing.l,
  },

  Page: {
    flex: 1,
    width: wp(100),
    paddingTop: hp(2),
    backgroundColor: theme.colors.light,
  },

  statContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },

  title: {
    fontSize: theme.fontSizes.h2,
    fontFamily: theme.fonts.medium,
    color: theme.colors.light,
    letterSpacing: 1,
  },
  cardtitle: {
    fontSize: theme.fontSizes.h2,
    fontFamily: theme.fonts.medium,
    color: theme.colors.heading,
    letterSpacing: 1,
  },

  span: {
    color: theme.colors.light,
    fontSize: theme.fontSizes.p,
    fontFamily: theme.fonts.light,
  },

  activity: {
    marginHorizontal: wp(5),
  },
});
