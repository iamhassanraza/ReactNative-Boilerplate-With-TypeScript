import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const fontsFamily = {

    primary: "Lato-Regular",
    primaryBold: "Lato-Bold",
    primaryItalic: "Lato-Italic",
    primaryItalicBold: "Lato-BoldItalic",
    primaryLight: 'Lato-Light',
    primaryThin: 'Lato-Thin'

};

const scaleFont = (fontSize: number) => {
    return RFValue(fontSize * 0.84)
}

const fontSize = {
    h0: scaleFont(40),
    h1: scaleFont(38),
    h2: scaleFont(34),
    h3: scaleFont(30),
    h4: scaleFont(28),
    h5: scaleFont(25),
    headerTitle: scaleFont(28),
    headingSmall_24: scaleFont(24),
    titleMedium: scaleFont(20),
    title: scaleFont(19),
    input: scaleFont(18),
    regular: scaleFont(17),
    normal: scaleFont(16),
    medium: scaleFont(14),
    medium_15: scaleFont(15),
    medium_13: scaleFont(13),
    medium_12: scaleFont(12),
    inputTitle: scaleFont(16),
    inputText: scaleFont(15),
    small: scaleFont(10),
    verySmall: scaleFont(8),
    buttonText: scaleFont(22)
}



export {
    fontsFamily,
    fontSize,
    scaleFont
}
