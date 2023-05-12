import React from 'react';
import {  View, TextInput, TextInputProps } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Colors } from 'theme';
import { styles } from './CustomTextInput.styles';

interface CustomTextInputProps extends TextInputProps {
  placeholder: string;
  height?: number;
  Icon: React.FC<SvgProps>
}

export default function CustomTextInput(props: CustomTextInputProps) {
  const { Icon } = props
  return (
    <View style={[styles.mainContainer]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={[
            styles.inputContainer,
          ]}>
          <TextInput
            placeholderTextColor={Colors.grey}
            value={props.value}
            style={[styles.inputText]}
            {...props}></TextInput>
        </View>
        <View style={styles.iconContainer}>
          <Icon></Icon>
        </View>
      </View>
    </View>
  );
}
