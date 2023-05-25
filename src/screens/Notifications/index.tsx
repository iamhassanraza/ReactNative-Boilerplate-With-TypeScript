import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from 'components/Header'
import { fontSize } from 'theme/fonts'
import RootView from 'components/RootView'
import { ScrollView } from 'react-native-gesture-handler'
import AlertCard from 'components/AlertCard'
import metrics from 'theme/metrics'

export default function Notifications() {
  
  return (
    <RootView>
      <Header title='Notifications'></Header>
      <ScrollView style={{ flex: 1, marginHorizontal: metrics.defaultMargin }}>
        <AlertCard type="ViewDetails" style={{ marginTop: metrics.defaultMargin }} title='Service Call Update' description={'We are pleased to inform you that your requested service call has been successfully completed. Our team of experts has resolved the issue and ensured that everything is in proper working order.'}></AlertCard>
        <AlertCard type="Dismiss" style={{ marginTop: metrics.defaultMargin }} title='Rent Alert' description='A unique identifier assigned to the transaction for tracking purposes.'></AlertCard>
      </ScrollView>
    </RootView>
  )
}

const styles = StyleSheet.create({})