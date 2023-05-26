import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SvgImages } from 'constants/Images'
import { Colors } from 'theme'
import { fontsFamily, fontSize } from 'theme/fonts'
import metrics from 'theme/metrics'
import LogoHeader from 'components/LogoHeader'
import CustomTextInput from 'components/CustomTextInput'
import CustomButton from 'components/CustomButton'
import Navigator from 'utils/Navigator'
import { AuthRoutes } from 'navigation/AuthStack'
import { useDispatch } from 'react-redux'
import { IUser } from 'store/types'
import { UserActions } from 'store/actions/userActions'


export default function Login() {

    const dispatch = useDispatch()
    const onLoginPress = () => {
        const dummyUser: IUser = {
            id: "1",
            name: 'Andrew Donalds',
            email: "example@gmail.com",
            job: "Care Taker"
        }
        dispatch(UserActions.login(dummyUser))
    }

    const onForgotPasswordPress = () => {
        Navigator.navigate(AuthRoutes.ForgotPassword)
    }


    return (
        <View style={styles.container}>
            <View>
                <LogoHeader title='Welcome Back !!' subTitle='Login to your account'></LogoHeader>
                <CustomTextInput
                    textContentType='username'
                    Icon={SvgImages.UserInputIcon}
                    placeholder='Username' />

                <CustomTextInput
                    textContentType='password'
                    secureTextEntry={true}
                    Icon={SvgImages.PasswordIcon}
                    placeholder='Password' />

                <CustomButton onPress={onLoginPress} style={styles.button} text='Log in'></CustomButton>

                <TouchableOpacity onPress={onForgotPasswordPress}>
                    <Text style={styles.forgotPassword}>Forgot Password ?</Text>
                </TouchableOpacity>


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