import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { theme } from '@/constants/theme'
import { Image } from 'expo-image'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';



const FeautredWorkout = () => {
  return (
    <View style={styles.imageContainer}>
    <Image
      source={{ uri : "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2019/07/Hands-Clapping-Chaulk-Kettlebell.jpg?quality=86&strip=all"}}
      style={{ width: "100%", height: "100%" , position : "relative" }}
    />
    <View style={{ position: "absolute", top: 20, left: 20 }}>
      <Text style = {styles.text}>HITT Training</Text>
      <View style={{ flexDirection: "row", gap: 10 , alignItems : "center"}}>
      <TouchableOpacity>

      <FontAwesome5 name="play-circle" size={28} color="#9381ff" />

      </TouchableOpacity>
      <Text style={{
          color: theme.colors.white,
          fontFamily: theme.fonts.regular,
          fontSize: theme.fontSizes.p,
      }}>Start Workout</Text>
      </View>
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 15,
        padding: 20,

        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <Text style={styles.tag}>250kcal</Text>
      <Text style={styles.tag}>Weight Gain</Text>
      <Text style={styles.tag}>15 min</Text>
    </View>
  </View>
  )
}

export default FeautredWorkout

const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 10,
        position: "relative",
      },
      tag: {
        backgroundColor: "rgba(255, 255, 255, 0.54)",
        backdropFilter: "blur(10px)",
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
        color: "black",
        fontFamily: theme.fonts.medium,
        fontSize: theme.fontSizes.p,
      },
      text : {
        color : theme.colors.white,
        fontFamily : theme.fonts.regular,
        fontSize : theme.fontSizes.h1,
      }
})