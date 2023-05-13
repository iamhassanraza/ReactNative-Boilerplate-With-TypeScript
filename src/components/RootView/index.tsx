import { StyleSheet, Text, View } from 'react-native'
import React, {  ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

interface RootViewProps {
    children: ReactNode
}

export default function RootView(props: RootViewProps) {
    return (
        <SafeAreaView>
            {props.children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})