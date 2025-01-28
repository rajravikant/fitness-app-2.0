import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Radio } from '@/constants/types'
import RadioGroups from '../ui/RadioGroups'

interface Props {
  data : string,
  updateData : (key: string, value: string) => void
}

const ActivityLevel = ({data,updateData}:Props) => {
  return (
    <View style={{width:'100%'}}>
      <RadioGroups options={activityLevel} 
      selected={data}
       onSelected={(s)=>updateData('activityLevel',s)}
       containerStyle={{flexDirection:'col'}}
       radioStyle={{width : '100%',padding:10,alignItems: "flex-start",gap:5}}
       />
    </View>
  )
}

export default ActivityLevel

const activityLevel: Radio[] = [
  {
    label: 'Sedentary',
    value: 'sedentary',
    desc: 'Little or no exercise',
  },
  {
    label: 'Lightly Active',
    value: 'lightlyActive',
    desc: 'Light exercise or sports 1-3 days a week',
  },
  {
    label: 'Moderately Active',
    value: 'moderatelyActive',
    desc: 'Moderate exercise or sports 3-5 days a week',
  },
  {
    label: 'Very Active',
    value: 'veryActive',
    desc: 'Hard exercise or sports 6-7 days a week',
  },
  {
    label: 'Super Active',
    value: 'superActive',
    desc: 'Very hard exercise or sports and a physical job',
  },
  
];