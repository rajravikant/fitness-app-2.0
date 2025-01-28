import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp } from '@/utils/common'
import { theme } from '@/constants/theme'

interface Props {
  data : string,
  updateData : (key: string, value: string) => void
}
const Height = ({data,updateData}:Props) => {
  return (
    <View>
      <ScrollView style={{height:hp(20)}}>
        <View>
        {heightInCms.map((height,index)=>(
          <Text key={index} style={[styles.height,height === data && styles.active]} onPress={()=>updateData('height',height)}>{height}</Text>
        ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default Height;


const styles = StyleSheet.create({
  height:{
    padding:10,
    margin:5,
    borderWidth:1,
    borderRadius:5
  },
  active : {
    backgroundColor: theme.colors.shade,
    color: 'white'
  }
})

const heightInCms = [
  "100",
  "102",
  "103",
  "104",
  "105",
  "106",
  "107",
  "108",
  "109",
  "110",
  "111",
  "112",
  "113",
  "114",
  "1150",
]

