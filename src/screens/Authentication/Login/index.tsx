import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SvgImages } from 'constants/Images'
import { Colors } from 'theme'
import { fontsFamily, fontSize } from 'theme/fonts'
import metrics from 'theme/metrics'
import LogoHeader from '../Components/LogoHeader'
import CustomTextInput from 'components/CustomTextInput'
import CustomButton from 'components/CustomButton'
import Navigator from 'utils/Navigator'
import { AuthRoutes } from 'navigation/AuthStack'


export default function Login() {


    const onLoginPress = () => {
        Navigator.navigate(AuthRoutes.ForgotPassword)
    }


    return (
        <View style={styles.container}>
            <View style={{}}>
                <LogoHeader title='Welcome Back !!' subTitle='Login to your account'></LogoHeader>
                <CustomTextInput Icon={SvgImages.UserInputIcon}
                    placeholder='Username' />

                <CustomTextInput Icon={SvgImages.PasswordIcon}
                    placeholder='Password' />

                <CustomButton onPress={onLoginPress} style={styles.button} text='Log in'></CustomButton>

                <Text style={styles.forgotPassword}>Forgot Password ?</Text>


                <Text style={styles.v1text}>v1.o</Text>
            </View>

            <View style={styles.bottomContainer}>
                <Text style={styles.v1text}>A product of Business Line Company</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: Colors.white,
        paddingTop: metrics.xlargeMargin,
        paddingHorizontal: metrics.largeMargin
    },
    button: {
        marginTop: metrics.smallMargin
    },
    forgotPassword: {
        color: Colors.black,
        alignSelf: 'flex-end',
        marginTop: metrics.defaultMargin
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