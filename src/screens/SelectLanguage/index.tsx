import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SvgImages } from 'constants/Images'
import { Colors } from 'theme'
import { fontsFamily, fontSize } from 'theme/fonts'
import metrics from 'theme/metrics'
import LogoHeader from 'components/LogoHeader'
import CustomButton from 'components/CustomButton'
import { useDispatch } from 'react-redux'
import IconWithText from 'components/IconWithText'
import { languagesEnum } from 'translations'


export default function SelectLanguage() {

    const [selectedLanguage, setselectedLanguage] = useState(languagesEnum.en)

    const dispatch = useDispatch()

    const onContinuePress = () => {

    }


    return (
        <View style={styles.container}>
            <View>
                <LogoHeader title='Choose A Desired Language' subTitle=''></LogoHeader>
                <IconWithText
                    Icon={SvgImages.EnglishFlag}
                    text='English'
                    showcheckIcon={selectedLanguage === languagesEnum.en}
                    onPress={() => setselectedLanguage(languagesEnum.en)}
                />

                <IconWithText
                    Icon={SvgImages.ArabicFlag}
                    text='عربي'
                    showcheckIcon={selectedLanguage === languagesEnum.ar}
                    onPress={() => setselectedLanguage(languagesEnum.ar)}
                />


                <CustomButton onPress={onContinuePress} style={styles.button} text='Continue'></CustomButton>

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