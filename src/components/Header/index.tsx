import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, commonStyles, heightPercentageToDP } from 'theme'
import { SvgImages } from 'constants/Images'
import { fontsFamily, fontSize } from 'theme/fonts'
import metrics from 'theme/metrics'
import Navigator from 'utils/Navigator'
import { TouchableOpacity } from 'react-native-gesture-handler'


interface HeaderProps {
    title?: string
}

export default function Header({ title = '' }: HeaderProps) {

    const onBackPress = () => {
        Navigator.goBack()
    }


    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <TouchableOpacity activeOpacity={0.7} onPress={onBackPress} style={styles.circle}>
                    <SvgImages.BackIcon></SvgImages.BackIcon>
                </TouchableOpacity>
            </View>
            <View style={styles.mid}>
                <Text style={styles.headertext}>{title}</Text>
            </View>
            <View style={styles.right}></View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: heightPercentageToDP('6'),
        justifyContent: 'center',
        marginVertical: metrics.smallMargin
    },
    left: {

        flex: 1,
        justifyContent: 'center'
    },
    circle: {
        width: heightPercentageToDP('5'),
        height: heightPercentageToDP('5'),
        // 
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        // elevation: 4,
        // shadowColor: Colors.primary
        ...commonStyles.shadow
    },
    right: { flex: 1 },
    mid: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headertext: {
        fontFamily: fontsFamily.primaryBold,
        color: Colors.black,
        fontSize: fontSize.titleMedium
    }

})