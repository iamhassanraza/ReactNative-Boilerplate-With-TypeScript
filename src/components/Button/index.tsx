import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Colors} from 'theme';
import {fontsFamily, fontSize} from 'theme/fonts';
import {heightPercentageToDP} from 'theme/metrics';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

export default function CustomButton(props: ButtonProps) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: heightPercentageToDP('6'),
    borderRadius: 5,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: fontSize.buttonText,
    fontFamily: fontsFamily.primaryBold,
  },
});
