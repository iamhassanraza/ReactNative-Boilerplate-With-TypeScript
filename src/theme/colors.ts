import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const Colors = {
    primary: '#0558B4',
    redBackgroun: '#FFF0F0',
    red: '#EF0000',
    black: '#111111',

    green: '#53F78B',
    yellow: '#FFC137',
    // transparentBlack: '#000000aa',
    // transparentDark: '#444444aa',
    transparent: 'transparent',
    white: '#ffffff',
    darkBackground: '#F0F1F6',
    lightBackground: '#F0F1F6',
    // darkPrimary: '#0f4c75',
    grey: '#5a5a5a',
    lightGrey: "#939AA4",
    lighterGrey: "#CDD4DA",
    error: "#dd3333",
    textInput: '#CDD4DA'
};


export const darkColors = {
    ...DarkTheme.colors,
    background: '#1b262c',
    text: '#bbe1fa',
};

export const lightColors = {
    ...DefaultTheme.colors,
    background: '#ffffff',
    text: Colors.black,
};