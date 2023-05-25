import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { Colors } from 'theme';
import { fontsFamily, fontSize } from 'theme/fonts';
import { heightPercentageToDP } from 'theme/metrics';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  style?: ViewStyle
  textStyle?:TextStyle
}

export default function CustomButton(props: ButtonProps) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.buttonContainer, props.style]}>
      <Text style={[styles.buttonText,props.textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: heightPercentageToDP('5.5'),
    borderRadius: 10,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: fontSize.regular,
    fontFamily: fontsFamily.primary,
  },
});
