import React from 'react';
import {Text, View, TextInput, TextInputProps} from 'react-native';
import {styles} from './CustomTextInput.styles';

interface CustomTextInputProps extends TextInputProps {
  title: string;
  placeholder: string;
  height?: number;
}

export default function CustomTextInput(props: CustomTextInputProps) {
  return (
    <View style={[styles.mainContainer]}>
      <Text style={styles.inputTitle}>{props.title}</Text>
      <View
        style={[
          styles.inputContainer,
          props.multiline && {height: props.height},
        ]}>
        <TextInput
          value={props.value?.toString()}
          style={[styles.inputText, props.multiline && {height: props.height}]}
          {...props}>
          {props.children}
        </TextInput>
      </View>
    </View>
  );
}
