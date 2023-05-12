import React from 'react';
import { ViewStyle } from 'react-native';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';
import { Colors } from 'theme';
import { fontsFamily, fontSize } from 'theme/fonts';
import { heightPercentageToDP } from 'theme/metrics';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  style: ViewStyle
}

export default function CustomButton(props: ButtonProps) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.buttonContainer, props.style]}>
      <Text style={styles.buttonText}>{props.text}</Text>
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
