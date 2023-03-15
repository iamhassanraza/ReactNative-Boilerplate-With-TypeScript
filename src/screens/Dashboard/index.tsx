import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigator from 'utils/Navigator'
import { MainRoutes } from 'navigation/HomeStack'
import { Button } from '@react-native-material/core'

export default function Dashboard() {
  const onManageCategoryPress = () => {
    Navigator.navigate(MainRoutes.ManageCategories)
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={onManageCategoryPress} style={{ alignSelf: 'center', }} title='Manage Categories'></Button>
    </View>
  )
}

const styles = StyleSheet.create({})