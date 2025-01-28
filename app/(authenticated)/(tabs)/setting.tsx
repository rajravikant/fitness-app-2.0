import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Header from '@/components/navigation/Header'

const Page = () => {
  return (
   <ScreenWrapper>
        <Header title='Setting' buttonBack />
   </ScreenWrapper>

  )
}

export default Page

const styles = StyleSheet.create({})