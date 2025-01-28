import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { Router } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '@/constants/theme';


interface BackButtonProps {
    router : Router
    Buttonstyles? : any
}

const BackButton = ({router,Buttonstyles}:BackButtonProps) => {
  const isPresented = router.canGoBack();
  return (
    <Pressable onPress={() => isPresented && router.back()} style={[styles.button,Buttonstyles ? Buttonstyles : null]}>
        <Ionicons name="chevron-back-sharp" size={24} color="black" />
    </Pressable>
  )
}

export default memo(BackButton)

const styles = StyleSheet.create({
    button : {
        padding: 8,
        backgroundColor : theme.colors.grey,
        alignSelf : 'flex-start',
        borderRadius : 10,
    }
})