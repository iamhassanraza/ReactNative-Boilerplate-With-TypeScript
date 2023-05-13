import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircularProgressBar from 'components/CircularProgressBar';
import TitleBar from 'screens/Home/Components/TitleBar';
import { Colors, getResponsiveSize } from 'theme';
import { fontsFamily, fontSize } from 'theme/fonts';
import metrics from 'theme/metrics';

interface RentCardCirclularBarProps {
  tintColor: string;
  fill: number;
  amountText: string;
  text: string;
}

const RentCardCirclularBar: React.FC<RentCardCirclularBarProps> = ({ tintColor, fill, amountText, text }) => {
  return (
    <View style={styles.circularProgressBarContainer}>
      <CircularProgressBar
        width={10}
        tintColor={tintColor}
        backgroundColor="rgba(6, 147, 239, 0.07)"
        size={getResponsiveSize(70)}
        fill={fill}
      >
        {() => <Text style={styles.amountText}>{amountText}</Text>}
      </CircularProgressBar>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const RentCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <TitleBar title="Rent" rightTitle="$600/Month" />
      <View style={styles.cardContainer}>
        <RentCardCirclularBar
          tintColor={Colors.green}
          fill={50}
          amountText="$3000"
          text="3 Months paid"
        />
        <RentCardCirclularBar
          tintColor={Colors.yellow}
          fill={30}
          amountText="$5000"
          text="5 Months due"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingVertical: metrics.defaultMargin,
    borderRadius: 20,
    marginBottom: metrics.defaultMargin,
  },
  circularProgressBarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountText: {
    fontFamily: fontsFamily.primaryBold,
    color: Colors.black,
    fontSize: fontSize.normal,
  },
  text: {
    fontFamily: fontsFamily.primaryBold,
    fontSize: fontSize.medium,
    color: Colors.black,
    marginTop: metrics.smallMargin,
  },
});

export default RentCard;
