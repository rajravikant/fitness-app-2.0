import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Header from '@/components/navigation/Header'

const Diet = () => {
  return (
    <ScreenWrapper>
      <Header title="Diet" buttonBack/>
      <Text>Diet and nutrution</Text>
  </ScreenWrapper>
  )
}

export default memo(Diet)

const styles = StyleSheet.create({})