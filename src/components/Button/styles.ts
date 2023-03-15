import { StyleSheet } from 'react-native'
import { Colors } from 'theme'
import metrics from 'theme/metrics'

export const styles = StyleSheet.create({
    default: {borderRadius:5, height: metrics.heightPercentageToDP('4'), borderWidth: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: '5%', borderColor: Colors.lighterGrey },
    filled: { backgroundColor: Colors.primary, borderWidth: 0 },
    text: { borderWidth: 0 },
    textStyle: { letterSpacing: 1, fontWeight: '600', color: Colors.primary }
})