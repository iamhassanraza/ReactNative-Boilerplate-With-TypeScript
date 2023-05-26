import { LayoutAnimation, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from 'components/Header'

import RootView from 'components/RootView'
import metrics from 'theme/metrics'
import { Colors, commonStyles } from 'theme'
import { fontsFamily, fontSize } from 'theme/fonts'
import { SvgProps } from 'react-native-svg'
import { SvgImages } from 'constants/Images'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { UserActions } from 'store/actions/userActions'
import Navigator from 'utils/Navigator'
import { MainRoutes } from 'navigation/HomeStack'

interface IconWithTextProps {
    LeftIcon?: React.FC<SvgProps>,
    RightIcon?: React.FC<SvgProps>
    text: string
    onPress?: () => void
}
const IconWithText = ({ LeftIcon, RightIcon, text, onPress = () => { } }: IconWithTextProps) => {
    return <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.IconWithTextContainer}>
        {!!LeftIcon && <LeftIcon></LeftIcon>}

        <View style={styles.textContainer}>
            <Text style={styles.text}>{text}</Text>
        </View>

        {!!RightIcon && <RightIcon></RightIcon>}
    </TouchableOpacity>
}





export default function ProfileScreen() {

    const dispatch = useDispatch()

    const NameCard = () => {
        return <View style={styles.nameCardContainer}>
            <Text style={styles.nameText}>Andrew Donalds</Text>
            <Text style={styles.occupation}>Care Taker</Text>
        </View>
    }


    const onLogoutPress = () => {
        dispatch(UserActions.logout())
    }

    const onSwitchLanguagePress = () => {
        Navigator.push(MainRoutes.SelectLanguage)
    }


    return (
        <RootView>
            <Header title='Profile' backButtonShown={false}></Header>
            <View style={{ paddingHorizontal: metrics.defaultMargin }}>
                <NameCard></NameCard>
                <IconWithText LeftIcon={SvgImages.Email} text='Laara.hariis021@gmail.com'></IconWithText>
                <IconWithText onPress={onSwitchLanguagePress} LeftIcon={SvgImages.Globe} text='Switch language'></IconWithText>
                <IconWithText onPress={onLogoutPress} LeftIcon={SvgImages.Logout} text='Logout'></IconWithText>
            </View>
        </RootView>
    )
}

const styles = StyleSheet.create({
    nameCardContainer: {
        backgroundColor: Colors.primary,
        width: '100%',
        padding: metrics.defaultMargin,
        borderRadius: 10
    },
    nameText: {
        fontFamily: fontsFamily.primaryBold,
        color: Colors.white,
        fontSize: fontSize.titleMedium
    },
    occupation: {
        fontFamily: fontsFamily.primary,
        color: Colors.whiteFadedText,
        fontSize: fontSize.medium_12,
        marginTop: 8
    },



    //ICON WITH TEXT COMPONENT STYLES
    text: {
        fontFamily: fontsFamily.primary,
        fontSize: fontSize.medium,
    },
    IconWithTextContainer: {
        width: '100%',
        padding: metrics.smallMargin,
        backgroundColor: 'white',
        ...commonStyles.shadow,
        borderRadius: 10,
        marginTop: metrics.defaultMargin,
        flexDirection: 'row'
    },
    textContainer: { flex: 1, paddingHorizontal: metrics.smallMargin }
})