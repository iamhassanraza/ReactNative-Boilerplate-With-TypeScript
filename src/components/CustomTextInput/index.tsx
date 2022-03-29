import React from 'react';
import {Text, View, TextInput, TextInputProps} from 'react-native';
import {styles} from './CustomTextInput.styles';

interface CustomTextInputProps extends TextInputProps {
  title: string;
  placeholder: string;
}

export default function CustomTextInput(props: CustomTextInputProps) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.inputTitle}>{props.title}</Text>
      <View style={styles.inputContainer}>
        <TextInput  style={styles.inputText} {...props}>
          {props.children}
        </TextInput>
      </View>
    </View>
  );
}
