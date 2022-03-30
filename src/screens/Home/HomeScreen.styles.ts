import { StyleSheet } from 'react-native'
import { Colors, spacing } from 'theme'
import { fontsFamily, fontSize } from 'theme/fonts'
import metrics from 'theme/metrics'


export const styles = StyleSheet.create({
    itemContainer: { marginTop: spacing.xl, borderWidth: 2, marginHorizontal: spacing.large, padding: spacing.medium, borderColor: Colors.primary },
    itemTitle: { fontFamily: fontsFamily.primaryBold, fontSize: fontSize.title, marginBottom: spacing.small },
    itemDesc: {},
    buttonContainer: { position: 'absolute', width: metrics.SCREEN_WIDTH, backgroundColor: Colors.white, bottom: 0, padding: spacing.xl }
})
