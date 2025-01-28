import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Header from '@/components/navigation/Header'

const Activity = () => {
  return (
    <ScreenWrapper>
      <Header title="Activity" buttonBack/>
      <Text>Activity</Text>
    </ScreenWrapper>
  )
}

export default memo(Activity)

const styles = StyleSheet.create({})