import { StyleSheet } from "react-native";
import { Colors } from "theme";
import metrics from "theme/metrics";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
     
        marginBottom: metrics.heightPercentageToDP('2')
    },
    textInputContainer: {
        flex: 4,
        justifyContent: 'center'
    },
    textInput: { height: metrics.heightPercentageToDP('6') },
    iconContainer: {
        width: metrics.widthPercentageToDP("15"),
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        margin: 0,
        height: metrics.heightPercentageToDP('6'),
        justifyContent: 'center'
    }
}
)