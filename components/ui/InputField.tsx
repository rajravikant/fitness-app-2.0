import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'
import React, { memo, Ref} from 'react'
import { theme } from '@/constants/theme'
import Icon from '@/components/ui/Icon'


interface InputFieldProps {
    placeholder : string
    value : string
    onChangeText : (text : string) => void
    secureTextEntry? : boolean
    containerStyles? : any
    icon? : {name : string, color : string , size : number , family : "Ionicons" | "FontAwesome5" | "AntDesign"}
    iconStyles? : object
    ref? : Ref<TextInput>
}

const InputField = ({placeholder,value,onChangeText,ref,containerStyles,secureTextEntry,icon,iconStyles}:InputFieldProps & TextInputProps) => {
  
  return (
    <View style={[styles.container,containerStyles ? containerStyles : null]}>
       {icon && <Icon {...icon} style={[styles.icon,iconStyles]} />}
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
        justifyContent : "center",
   
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