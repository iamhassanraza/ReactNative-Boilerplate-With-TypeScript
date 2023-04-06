import { StyleSheet } from 'react-native'
import { fontSize } from 'theme/fonts'
import { Colors } from 'theme'

export const styles = StyleSheet.create({
    container: {
        marginBottom: '5%',
    },
    view: {
        padding: '5%',
        backgroundColor: Colors.lightBackground,
        borderWidth: 1,
        borderColor: Colors.lighterGrey,
        borderRadius: 5,
    },
    title: {
        fontSize: fontSize.titleMedium,
        marginBottom: '5%',
    },
    datePickerContainer: {
        marginBottom: '5%',
    },
    textInput: {
        marginBottom: '5%',
    },
    checkBoxView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: '5%',
    },
    buttonStyles: { margin: 0, padding: 0, justifyContent: 'flex-start' }
});