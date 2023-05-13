import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { fontsFamily, fontSize } from 'theme/fonts';
import { Colors } from 'theme';
import metrics from 'theme/metrics';

interface TitleBarProps {
  title: string;
  rightTitle?: string;
}

export default function TitleBar({ title = '', rightTitle = '' }: TitleBarProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.leftTitle}>{title}</Text>
        <Text style={styles.rightTitle}>{rightTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:metrics.defaultMargin
  },
  leftTitle: {
    fontFamily: fontsFamily.primaryBold,
    fontSize: fontSize.titleMedium,
    color: Colors.black,
  },
  rightTitle: {
    fontFamily: fontsFamily.primary,
    fontSize: fontSize.medium,
  },
});
