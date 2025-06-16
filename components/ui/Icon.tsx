import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons,FontAwesome5,AntDesign } from '@expo/vector-icons'

interface IconProps {
    size : number
    color : string
    family : "Ionicons" | "FontAwesome5" | "AntDesign"
    name : string | any
    style? : object
}


const Icon = ({size,color,family,name,style}:IconProps) => {
  return (
    <View style={style}>
        {family === "Ionicons" && <Ionicons name={name}size={size} color={color} />}
        {family === "FontAwesome5" && <FontAwesome5 name={name} size={size} color={color} />}
        {family === "AntDesign" && <AntDesign name={name} size={size} color={color} />}
    </View>
  )
}

export default Icon