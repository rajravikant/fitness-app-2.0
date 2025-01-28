import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import React, { memo, Ref, useState } from 'react'
import { theme } from '@/constants/theme'
import AntDesign from '@expo/vector-icons/AntDesign'


interface InputFieldProps {
    placeholder : string
    value : string
    onChangeText : (text : string) => void
    secureTextEntry? : boolean
    containerStyles? : any
    ref? : Ref<TextInput>
}

const InputField = ({placeholder,value,onChangeText,ref,containerStyles,secureTextEntry}:InputFieldProps & TextInputProps) => {
  
  return (
    <View style={[styles.container,containerStyles ? containerStyles : null]}>
        <AntDesign style={styles.icon} name="search1" size={20} color="grey" />
        <TextInput
            placeholder={placeholder}
            value={value} 
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            style={styles.text}
            ref={ref}
            multiline={false}
        />
    </View>
  )
}

export default memo(InputField)

const styles = StyleSheet.create({
    container : {
        paddingHorizontal: 5,
        borderColor : theme.colors.grey,
        borderWidth : 1,
        borderRadius : 10,
        width: "100%",
        flex : 1,
   
    },
    text :{
        fontSize: 16,
        fontFamily: theme.fonts.regular,
        color: theme.colors.text,
        marginLeft: 35,
    },
    icon:{
        position: "absolute",
        left: 10,
        top:10,
        inset: 0,
    }
})