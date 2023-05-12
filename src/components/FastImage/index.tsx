import { StyleSheet, Text, View, Image, ImageProps } from 'react-native'
import React from 'react'

interface FastImageProps extends ImageProps { }

export default function FastImage(props: FastImageProps) {
  return (

    <Image {...props}></Image>
  )
}

const styles = StyleSheet.create({})