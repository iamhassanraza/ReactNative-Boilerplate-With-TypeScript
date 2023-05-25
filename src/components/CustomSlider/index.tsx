import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Slider, SliderProps } from 'react-native-elements';
import { Colors } from 'theme';

interface CustomSliderProps extends SliderProps {
  minimumTrackColor?: string;
  thumbColor?: string;
}

export default function CustomSlider(props: CustomSliderProps) {
  const {
    value,
    minimumTrackColor = Colors.primary,
    thumbColor = Colors.lightBlue,
    ...rest
  } = props;

  return (
    <Slider
      value={value}
      style={styles.slider}
      maximumValue={100}
      minimumValue={0}
      step={1}
      disabled
      maximumTrackTintColor={Colors.extraLightGrey}
      minimumTrackTintColor={minimumTrackColor}
      trackStyle={styles.track}
      thumbStyle={styles.thumb}
      thumbProps={{
        children: (
          <View style={[styles.thumbInner, { backgroundColor: minimumTrackColor }]}>
            <View style={[styles.thumbDot, { backgroundColor: thumbColor }]} />
          </View>
        ),
      }}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  slider: {
    width: '100%',
  },
  track: {
    height: 8,
    backgroundColor: 'transparent',
  },
  thumb: {
    height: 18,
    width: 18,
    backgroundColor: 'transparent',
  },
  thumbInner: {
    width: 18,
    height: 18,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbDot: {
    width: 8,
    height: 8,
    borderRadius: 50,
  },
});
