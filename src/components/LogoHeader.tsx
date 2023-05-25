import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'components/FastImage'
import { ImageConsts } from 'constants/Images'
import { Colors, getResponsiveSize, heightPercentageToDP, widthPercentageToDP } from 'theme'
import { fontsFamily, fontSize } from 'theme/fonts'
import metrics from 'theme/metrics'


interface Props {
    title: string,
    subTitle: string,
}

export default function LogoHeader({ title = '', subTitle = '' }: Props) {
    return (
        <View style={styles.container}>
            <FastImage style={styles.image} source={ImageConsts.logo}></FastImage>
            <Text style={styles.heading}>{title}</Text>
            <Text style={styles.subheading}>{subTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: metrics.largeMargin
    },
    image: {
        alignSelf: 'center',
        width: getResponsiveSize(95),
        height: getResponsiveSize(95),
    },
    heading: {
        fontFamily: fontsFamily.primaryBold,
        color: Colors.black,
        fontSize: fontSize.headingSmall_24,
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: metrics.xsmallMargin,
    },
    subheading: {
        fontFamily: fontsFamily.primary,
        textAlign: 'center',
        alignSelf: 'center',
        marginHorizontal:'14%'

    }
})