
import { StyleSheet, Text, View, ViewProps, ViewStyle } from 'react-native';
import React from 'react';
import { fontsFamily, fontSize, scaleFont } from 'theme/fonts';
import { Colors } from 'theme';
import metrics from 'theme/metrics';

interface TitleBarProps {
  text: string;
  underline?: boolean;
  Bold?: boolean
  size?: number
  style?: ViewStyle
}

export default function Label({ text = '', underline = false, Bold = false, size = 0 , style }: TitleBarProps) {
  return (
    <View style={[styles.container, underline && styles.underline , style ]}>
      <Text style={[styles.labelText, !!size && { fontSize: scaleFont(size) }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: metrics.defaultMargin
  },
  labelText: {
    fontFamily: fontsFamily.primaryBold,
    fontSize: fontSize.titleMedium,
    color: Colors.black,
  },
  underline: {
    paddingBottom: metrics.smallMargin,
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 0.5
  }

});
