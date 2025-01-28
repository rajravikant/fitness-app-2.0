import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { theme } from '@/constants/theme'
import { hp } from '@/utils/common'
import Ionicons from '@expo/vector-icons/Ionicons'

const IconButton = ({onPress}:{onPress : ()=>void}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Ionicons name="filter" size={24} color="white" />
    </TouchableOpacity>
  )
}

export default IconButton

const styles = StyleSheet.create({
     button: {
        alignItems: "center",
        justifyContent: "center",
        padding : 10,
        backgroundColor : theme.colors.dark,
        borderRadius : 10
      },
})