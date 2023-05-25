import { SvgImages } from 'constants/Images';
import React from 'react';
import { View, TextInput, TextInputProps, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { SvgProps } from 'react-native-svg';
import metrics from 'theme/metrics';
import { styles } from './IconWithText.styles';

interface IconWithTextProps extends TextInputProps {
  text: string;
  Icon: React.FC<SvgProps>,
  showcheckIcon?: boolean,
  onPress?: () => void
}

export default function IconWithText(props: IconWithTextProps) {
  const { Icon, text, showcheckIcon = false, onPress = () => { } } = props
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={[styles.mainContainer]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={[
            styles.inputContainer,
          ]}>
          <View style={[showcheckIcon && { flexDirection: 'row', justifyContent: 'space-between', marginRight: metrics.defaultMargin }]}>
            <Text
              style={[styles.text]}
            >{text}</Text>
            {showcheckIcon && <SvgImages.CheckIcon />}
          </View>

        </View>
        <View style={styles.iconContainer}>
          <Icon></Icon>
        </View>
      </View>
    </TouchableOpacity>
  );
}
