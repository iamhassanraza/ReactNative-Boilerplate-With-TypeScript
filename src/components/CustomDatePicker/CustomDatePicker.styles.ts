import { StyleSheet, Text, View } from 'react-native'

import { Colors, spacing } from 'theme';
import { fontsFamily } from 'theme/fonts';
export const styles = StyleSheet.create({
    container: {
        height: 60,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        paddingLeft: 5,
        backgroundColor: Colors.textInput,
    },
    title: {
        marginBottom: spacing.small,
        marginTop: spacing.xl,
        fontFamily: fontsFamily.primaryBold,
        color: Colors.primary,
    },

})
