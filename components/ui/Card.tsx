import { StyleSheet, StyleSheetProperties, Text, View } from 'react-native'
import React from 'react'
import { PropsWithChildren } from 'react'
import { theme } from '@/constants/theme'

interface CardProps {
    style ?: object
}

const Card = ({style, children}: PropsWithChildren<CardProps>) => {
    return (
        <View style={{...styles.card, ...style}}>
            {children}
        </View>
    )
}
export default Card

const styles = StyleSheet.create({
    card: {
        shadowColor: theme.colors.secondary,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        shadowOpacity: 0.26,
        elevation: 4,
        borderCurve:'continuous', 
        backgroundColor: 'white',
        padding: 20,
        borderRadius: theme.borderRadius.l
    }
})