import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, commonStyles, getResponsiveSize, heightPercentageToDP, spacing } from 'theme';
import { fontsFamily, fontSize } from 'theme/fonts';
import metrics from 'theme/metrics';

export const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: metrics.largeMargin,
    },
    inputContainer: {
        flex: 1,
        borderColor: Colors.white,
        borderRadius: 50,
        borderWidth: 1,
        height: heightPercentageToDP("6"),
        justifyContent: 'center',
        paddingLeft: '18%',
        backgroundColor: Colors.white,
        ...commonStyles.shadow

    },
    inputText: {
        color: Colors.black,
        fontFamily: fontsFamily.primary,
        fontSize: fontSize.inputText,
    },
  
    
    iconContainer: {
        width: heightPercentageToDP("6.5"),
        height: heightPercentageToDP("6.5"),
        position: 'absolute',
        borderRadius: 30,
        backgroundColor:Colors.white,
        borderColor: Colors.primary,
        justifyContent:'center',
        alignItems:'center',
        ...commonStyles.shadow
    
    }
});
