import React from 'react'
import { Stack } from 'expo-router'


const Layout = () => {
  return (
    <Stack
      screenOptions={{
        animation: "ios_from_left",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
     <Stack.Screen name = "profile"/>
      <Stack.Screen
        name="search"
        options={{
          headerTitle: "Search",
        }}
      />
      <Stack.Screen
        name="notification"
        options={{
          headerShown: true,
          headerTitle: "Notification",
        }}
      />
      <Stack.Screen
        name="mealdetails"
        options={{
          presentation: "fullScreenModal",
        }}
      />
      <Stack.Screen name="workoutplan"/>
      <Stack.Screen name="exercise" />
     
    </Stack>
  )
}

export default Layout;