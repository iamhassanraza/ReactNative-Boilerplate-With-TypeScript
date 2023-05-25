import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { Colors, commonStyles } from 'theme';
import CustomButton from 'components/CustomButton';
import metrics, { heightPercentageToDP, widthPercentageToDP } from 'theme/metrics';
import { fontsFamily, fontSize } from 'theme/fonts';

interface StatusCardProps {
  heading: string;
  description: string;
  buttonText: string;
  onPress?: () => void;
}


const StatusCard: FC<StatusCardProps> = ({ heading, description, buttonText, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <CustomButton textStyle={styles.buttonText} style={styles.button} text={buttonText} onPress={onPress} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: metrics.smallMargin,
    backgroundColor: Colors.white,
    ...commonStyles.shadow,
    borderRadius: 10,
    marginBottom:metrics.defaultMargin
  },
  heading: {
    fontFamily: fontsFamily.primary,
    color: Colors.black,
    fontSize: fontSize.normal,
  },
  description: {
    fontFamily: fontsFamily.primary,
    fontSize: fontSize.medium_12,
    marginVertical: metrics.xsmallMargin,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttonWrapper: {
    width: widthPercentageToDP('25%'),
    height: heightPercentageToDP('4%'),
  },
  buttonText: {
    fontSize: fontSize.medium_12,
    fontFamily: fontsFamily.primaryBold,
  },
  button: {
    width: widthPercentageToDP('25'),
    height: heightPercentageToDP('4')
  },
});

export default StatusCard