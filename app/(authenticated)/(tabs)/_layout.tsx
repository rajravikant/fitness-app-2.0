import { theme } from "@/constants/theme";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import HomeHeader from "@/components/navigation/HomeHeader";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarLabel: () => null,
        tabBarStyle:{
          backgroundColor: theme.colors.white,
          height: 60,
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          header: () => <HomeHeader />,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          title: "Workout",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 size={20} name="dumbbell" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="diet"
        options={{
          title: "Diet",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="fast-food-sharp" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="line-graph" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Activity",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
