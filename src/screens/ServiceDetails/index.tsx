import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootView from 'components/RootView'
import Header from 'components/Header'
import { Colors } from 'theme'
import { fontsFamily, fontSize } from 'theme/fonts'
import metrics from 'theme/metrics'
import CustomButton from 'components/CustomButton'


interface KeyValueTextBoxProps {
    keyText: string,
    valueText: string
}
const KeyValueTextBox = ({ keyText, valueText }: KeyValueTextBoxProps) => {
    return (<View style={styles.container}>
        <Text style={styles.key}>{keyText}</Text>
        <Text style={[styles.value, valueText.length > 20 && { marginTop: 10 }]}>{valueText}</Text>
    </View>)
}

export default function ServiceDetails() {
    return (
        <RootView>
            <Header title='Service Details'></Header>
            <View style={{ marginVertical: metrics.defaultMargin }}>
                <KeyValueTextBox keyText={"Service Request ID"} valueText={"13450006564"}></KeyValueTextBox>
                <KeyValueTextBox keyText={"Service Type"} valueText={"Full day"}></KeyValueTextBox>
                <KeyValueTextBox keyText={"Date and Time of Service"} valueText={"4 May 2022, 10:09 AM"}></KeyValueTextBox>
                <KeyValueTextBox keyText={"Service Technician"} valueText={"Rent Payment"}></KeyValueTextBox>
                <KeyValueTextBox keyText={"Service Description"} valueText={"We are pleased to inform you that your requested service call has been successfully completed."}></KeyValueTextBox>
                <KeyValueTextBox keyText={"Service Cost"} valueText={"$80.00"}></KeyValueTextBox>
            </View>
            <View style={{margin:metrics.defaultMargin}}>
                <CustomButton text='Pay and give feedback'></CustomButton>
            </View>
        </RootView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: Colors.white,
        borderBottomColor: Colors.lighterGrey,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: metrics.defaultMargin - 2
    },
    key: {
        fontFamily: fontsFamily.primary,
        fontSize: fontSize.medium_13,
    },
    value: {
        fontFamily: fontsFamily.primary,
        fontSize: fontSize.medium_13,
        color: Colors.black,
    }
})