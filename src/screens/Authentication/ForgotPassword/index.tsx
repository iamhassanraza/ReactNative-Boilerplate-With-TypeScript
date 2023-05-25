import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'components/FastImage'
import { ImageConsts, SvgImages } from 'constants/Images'
import { Colors, commonStyles, getResponsiveSize, heightPercentageToDP, widthPercentageToDP } from 'theme'
import { fontsFamily, fontSize } from 'theme/fonts'
import metrics, { SCREEN_HEIGHT, SCREEN_WIDTH } from 'theme/metrics'
import LogoHeader from 'components/LogoHeader'
import CustomTextInput from 'components/CustomTextInput'
import CustomButton from 'components/CustomButton'
import Header from 'components/Header'
import { SafeAreaView } from 'react-native'


export default function ForgotPassword() {
    return (
        <SafeAreaView style={styles.container}>
            <Header></Header>
            <View style={{paddingHorizontal:metrics.defaultMargin,flex:1}}>
                <LogoHeader title='Reset Password' subTitle={`Enter your email address and we'll send you a link to reset your password.`}></LogoHeader>
                <CustomTextInput textContentType="emailAddress" Icon={SvgImages.EmailIcon}
                    placeholder='Email' />

                <CustomButton style={styles.button} text='Continue'></CustomButton>



                <Text style={styles.v1text}>v1.o</Text>
            </View>

            <View style={styles.bottomContainer}>
                <Text style={styles.v1text}>A product of Business Line Company</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height:SCREEN_HEIGHT,
        width:SCREEN_WIDTH,
        justifyContent: "space-between",
        backgroundColor: Colors.white,
        // paddingTop: metrics.xlargeMargin,

    },
    button: {
        marginTop: metrics.smallMargin
    },

    v1text: {
        color: Colors.black,
        alignSelf: 'center',
        fontFamily: fontsFamily.primary,
        marginTop: metrics.defaultMargin
    },
    bottomContainer: {
        marginBottom: metrics.largeMargin,
        alignSelf: 'center'
    }
})