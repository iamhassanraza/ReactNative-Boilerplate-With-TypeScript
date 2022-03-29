import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, spacing } from 'theme';
import { fontsFamily, fontSize } from 'theme/fonts';

export const styles = StyleSheet.create({
    mainContainer: {
        marginTop: spacing.xl,
    },
    inputContainer: {
        borderColor: Colors.grey,
        borderRadius: 5,
        borderWidth: 1,
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 5,
        backgroundColor: Colors.textInput,
    },
    inputText: {
        color: Colors.black,
        fontFamily: fontsFamily.primary,
        fontSize: fontSize.inputText,
    },
    inputTitle: {
        color: Colors.primary,
        fontFamily: fontsFamily.primaryBold,
        fontSize: fontSize.inputTitle,
        marginBottom: spacing.small,
    },
});
