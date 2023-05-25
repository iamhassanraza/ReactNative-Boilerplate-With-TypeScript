import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import metrics from 'theme/metrics'
import { fontsFamily, fontSize } from 'theme/fonts'
import { Colors } from 'theme'

type GraphDetailBoxProps = {
    backgroundColor: string,
    months: string,
    amount: string,
    style?: ViewStyle
    textColor?: string
}

const GraphDetailBox: React.FC<GraphDetailBoxProps> = (props) => {
    const { backgroundColor, months, amount } = props;


    if (amount === "0") {
        return null
    }

    return (
        <View style={[styles.dueContainer, props.style]}>
            <View style={[styles.dueBox, { backgroundColor }]} />
            <View>
                <Text style={[styles.dueText, !!props.textColor && { color: props.textColor }]}>{months}</Text>
                <Text style={[styles.amountText, !!props.textColor && { color: props.textColor }]}>{amount}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    dueContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginRight: metrics.xlargeMargin
    },
    dueBox: {
        width: 12,
        height: 12,
        marginTop: 3,
        marginRight: 10,
        borderRadius: 10
    },
    dueText: {
        fontFamily: fontsFamily.primary,
        fontSize: fontSize.medium,
    },
    amountText: {
        fontFamily: fontsFamily.primaryBold,
        fontSize: fontSize.normal,
        marginTop: metrics.xsmallMargin,
        color: Colors.black
    },
})

export default GraphDetailBox