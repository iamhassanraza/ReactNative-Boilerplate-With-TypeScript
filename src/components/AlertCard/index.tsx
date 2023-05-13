import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, SCREEN_WIDTH } from 'theme';
import { fontsFamily, fontSize } from 'theme/fonts';
import metrics, { SCREEN_HEIGHT } from 'theme/metrics';
import { SvgImages } from 'constants/Images';

interface AlertCardProps {
    title: string;
    description: string;
}

const AlertCard: React.FC<AlertCardProps> = ({ title, description }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.timeContainer}>
                    <SvgImages.ClockIcon />
                    <Text style={styles.time}>5:09 PM</Text>
                </View>
                <View style={styles.dismissedContainer}>
                    <View style={styles.dismissedBox}>
                        <Text style={styles.dismissedText}>Dismissed</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH * 0.75,
        height: SCREEN_HEIGHT * 0.2,
        backgroundColor: Colors.white,
        borderRadius: 10,
        padding: metrics.defaultMargin,
        marginBottom:metrics.defaultMargin
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: metrics.smallMargin,
    },
    timeContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    time: {
        fontFamily: fontsFamily.primary,
        fontSize: fontSize.medium_12,
        marginLeft: 5,
    },
    dismissedContainer: {
        justifyContent: 'center',
    },
    dismissedBox: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: Colors.redBackgroun,
    },
    dismissedText: {
        color: Colors.red,
        fontFamily: fontsFamily.primaryBold,
        fontSize: fontSize.medium_12,
    },
    title: {
        color: Colors.black,
        fontFamily: fontsFamily.primaryBold,
        fontSize: fontSize.normal,
        marginBottom: metrics.smallMargin,
    },
    description: {
        fontFamily: fontsFamily.primary,
        fontSize: fontSize.medium_12,
    },
});

export default AlertCard;
