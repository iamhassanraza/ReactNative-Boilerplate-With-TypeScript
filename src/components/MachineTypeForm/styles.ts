import { StyleSheet } from "react-native";
import { Colors } from "theme";
import { fontSize } from "theme/fonts";
import metrics from "theme/metrics";


export const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: Colors.lightGrey,
      width: '100%',
      paddingVertical: metrics.heightPercentageToDP('2'),
      paddingHorizontal: '4%',
      marginBottom: '3%',
      backgroundColor: Colors.lightBackground,
    },
    title: { fontSize: fontSize.h4 },
    bottomButtonContainer: { flexDirection: 'row', marginTop: '4%' },
    iconButton: { margin: 0, padding: 0, justifyContent: 'flex-start' }
  })