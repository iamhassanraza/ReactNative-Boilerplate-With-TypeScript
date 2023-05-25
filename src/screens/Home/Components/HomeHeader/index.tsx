import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import HeaderBackground from 'assets/svgs/homeHeader.svg';
import { Colors, SCREEN_HEIGHT, SCREEN_WIDTH } from 'theme';
import { fontsFamily, fontSize } from 'theme/fonts';
import metrics from 'theme/metrics';
import CircularProgressBar from 'components/CircularProgressBar';
import { SvgImages } from 'constants/Images';
import Navigator from 'utils/Navigator';
import { MainRoutes } from 'navigation/HomeStack';

interface HomeHeaderProps { }

export default function HomeHeader(props: HomeHeaderProps) {
    const onNotificationIconPress = () => {
        Navigator.navigate(MainRoutes.Notification)
    }

    return (
        <View style={styles.container}>
            <HeaderBackground width={SCREEN_WIDTH} />
            <View style={styles.content}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.nameText}>Andrew Donalds</Text>
                        <Text style={styles.welcomeText}>Welcome To Future City</Text>
                    </View>
                    <TouchableOpacity onPress={onNotificationIconPress} style={styles.bellIconContainer}>
                        <View style={styles.redDot} />
                        <SvgImages.BellIcon />
                    </TouchableOpacity>
                </View>
                <View style={styles.progressContainer}>
                    <CircularProgressBar fill={75} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: SCREEN_HEIGHT * 0.45,
    },
    content: {
        paddingTop: metrics.smallMargin,
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        height: SCREEN_HEIGHT,
    },
    header: {
        width: '100%',
        paddingVertical: metrics.xsmallMargin,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: metrics.defaultMargin,
        marginBottom: 20,
    },
    bellIconContainer: {
        width: 42,
        height: 42,
        backgroundColor: Colors.whiteFaded,
        padding: 12,
        borderRadius: 50,
    },
    redDot: {
        width: 10,
        height: 10,
        backgroundColor: Colors.red,
        position: 'absolute',
        right: 3,
        borderRadius: 10,
    },
    nameText: {
        fontFamily: fontsFamily.primaryBold,
        fontSize: fontSize.normal,
        color: Colors.white,
        marginBottom: metrics.xsmallMargin * 0.5,
    },
    welcomeText: {
        fontFamily: fontsFamily.primary,
        fontSize: fontSize.medium_12,
        color: Colors.whiteFadedText,
    },
    progressContainer: {
        marginBottom: SCREEN_HEIGHT * 0.07,
    },
});
