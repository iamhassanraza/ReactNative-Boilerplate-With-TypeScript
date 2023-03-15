import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import metrics from 'theme/metrics'
import { Colors } from 'theme'
import { styles } from './styles'



type ButtonVariants = "Outline" | "Text" | "Filled"

interface ButtonProps {
  variant: ButtonVariants,
  title: string
  style?: ViewStyle
}

export default function Button({ title, variant, style }: ButtonProps) {
  return (
    <View style={[styles.default, variant === "Filled" && styles.filled, variant === "Text" && styles.text,{...style}]}>
      <Text style={[styles.textStyle, variant === "Filled" && { color: 'white' }]}>{title}</Text>
    </View>
  )
}

