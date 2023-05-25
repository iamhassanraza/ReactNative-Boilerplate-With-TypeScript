import React, { useEffect } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

import { Colors, SCREEN_WIDTH } from 'theme';
import { fontsFamily, fontSize } from 'theme/fonts';
import metrics, { SCREEN_HEIGHT } from 'theme/metrics';
import { SvgImages } from 'constants/Images';
import Navigator from 'utils/Navigator';
import { MainRoutes } from 'navigation/HomeStack';

export type alertType = "Dismiss" | "ViewDetails"
interface AlertCardProps {
    title: string;
    description: string;
    style?: ViewStyle
    type: alertType
    // onViewDetailPress?: () => void
}

const AlertCard: React.FC<AlertCardProps> = ({ title, description, style, type }) => {

    const moveAnim = new Animated.Value(0.2);

    useEffect(() => {
        Animated.parallel([
            Animated.timing(moveAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }),

        ]).start();
    }, []);


  const onViewDetailPress = ()=>{
    Navigator.push(MainRoutes.ServiceDetails)
  }


    return (
        <Animated.View style={[styles.container, { opacity: moveAnim }, style]}>
            <View style={styles.header}>
                <View style={styles.timeContainer}>
                    <SvgImages.ClockIcon />
                    <Text style={styles.time}>5:09 PM</Text>
                </View>
                <View style={styles.dismissedContainer}>
                    {type === "Dismiss" ?
                        <View style={styles.dismissedBox}>
                            <Text style={styles.dismissedText}>Dismissed</Text>
                        </View> :
                        <TouchableOpacity onPress={onViewDetailPress} style={[styles.dismissedBox, { backgroundColor: Colors.whiteFaded }]}>
                            <Text style={[styles.dismissedText, { color: Colors.primary }]}>View Details</Text>
                        </TouchableOpacity>}
                </View>
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: SCREEN_HEIGHT * 0.2,
        backgroundColor: Colors.white,
        borderRadius: 10,
        padding: metrics.defaultMargin,
        marginRight: metrics.defaultMargin
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
