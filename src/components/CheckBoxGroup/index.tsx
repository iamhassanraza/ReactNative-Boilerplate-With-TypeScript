import {RadioButton, RadioButtonOptions} from 'models/user/UserForm';
import React, {useState} from 'react';
import {ViewStyle, StyleProp} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Colors, spacing} from 'theme';
import {fontsFamily, fontSize} from 'theme/fonts';
import metrics from 'theme/metrics';

interface CheckBoxGroupProps extends Omit<RadioButton, 'required' | 'type'> {
  value: RadioButtonOptions;
  getSelectedValue: (val: RadioButtonOptions) => void;
}

export default function CheckBoxGroup(props: CheckBoxGroupProps) {
  const items: RadioButtonOptions[] = props.options;
  const selectedValue = props.value;
  const title = props.label;

  return (
    <View>
      <Text style={styles.labelStyle}>{title}</Text>

      <View
        style={{
          flexDirection: items.length > 2 ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {items.map((val: RadioButtonOptions, index: number) => {
          return (
            <View key={index} style={[styles.checkBoxContainer]}>
              <CheckBox
                activeOpacity={1}
                onPress={() => {
                  props.getSelectedValue(val);
                }}
                key={val.id}
                center
                title={val.label}
                textStyle={styles.textStyle}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor={Colors.primary}
                uncheckedColor={Colors.primary}
                size={20}
                right={false}
                containerStyle={styles.CheckBoxContainerStyle}
                checked={val.id === selectedValue?.id ? true : false}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CheckBoxContainerStyle: {
    backgroundColor: Colors.white,
    borderWidth: 0,
    margin: 0,
  },
  textStyle: {
    fontWeight: '400',
    color: 'black',
  },
  labelStyle: {
    fontSize: fontSize.inputTitle,
    fontFamily: fontsFamily.primaryBold,
    color: Colors.primary,
    marginTop: spacing.xl,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.grey,
  },
});
