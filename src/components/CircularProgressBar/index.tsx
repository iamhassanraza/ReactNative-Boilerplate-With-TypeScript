import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { AnimatedCircularProgress, AnimatedCircularProgressProps } from 'react-native-circular-progress';
import { Colors, getResponsiveSize } from 'theme';
import { fontsFamily, fontSize } from 'theme/fonts';
import metrics from 'theme/metrics';


interface Props {
    size?: number,
    fill: number,
    tintColor?: string,
    backgroundColor?: string,
    width?: number
    children?: ((fill: number) => JSX.Element) | React.ReactChild;
}

export default function CircularProgressBar({
    size = getResponsiveSize(140), fill = 75, tintColor = Colors.green, backgroundColor = Colors.whiteFaded, children, width = 15 }: Props) {

    const renderInsideComponent = (fill: number) => (
        <View style={styles.circleInnerContainer}>
            <Text style={styles.totalBalance}>
                Total Balance
            </Text>
            <Text style={styles.balanceNumber}>${Math.floor(fill) * 10000}</Text>
        </View>
    )

    return (
        <AnimatedCircularProgress
            rotation={0}
            size={size}
            width={width}
            fillLineCap={'round'}
            fill={fill}
            duration={2000}
            tintColor={tintColor}
            backgroundColor={backgroundColor}

        >
            {children ? children : renderInsideComponent}
        </AnimatedCircularProgress>
    )
}

const styles = StyleSheet.create({
    circleInnerContainer: {
        justifyContent: 'center', alignItems: 'center'
    },
    totalBalance: {
        fontFamily: fontsFamily.primaryBold,
        fontSize: fontSize.regular,
        color: Colors.whiteFadedText,
        marginBottom: metrics.xsmallMargin
    },
    balanceNumber: {
        fontFamily: fontsFamily.primaryBold,
        fontSize: fontSize.h5,
        color: Colors.white
    }
})