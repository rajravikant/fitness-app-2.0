import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '@/constants/theme'


interface Props {
  data : string,
  updateData : (key: string, value: string) => void
}
const Weight = ({data,updateData}:Props) => {
  return (
    <View>
      <Text>Weight</Text>
    </View>
  )
}

export default Weight
