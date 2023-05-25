import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'theme';
import metrics from 'theme/metrics';
import { fontsFamily, fontSize } from 'theme/fonts';
import { SvgImages } from 'constants/Images';
import TitleBar from '../TitleBar';

const mockData = [
  {
    id: 1,
    amount: '50',
    currency: '$',
    time: '4 April 2023, 5:09 pm',
  },
  {
    id: 2,
    amount: '30',
    currency: '$',
    time: '4 April 2023, 5:09 pm',
  },
  {
    id: 3,
    amount: '100',
    currency: '$',
    time: '4 April 2023, 5:09 pm',
  },
];

interface ListItemProps {
  amount: string;
  currency: string;
  time: string;
}

const ListItem: React.FC<ListItemProps> = ({ amount, currency, time }) => {
  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.amountText}>{amount}{currency}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.timeText}>{time}</Text>
        <View style={styles.viewDetailsContainer}>
          <SvgImages.EyeIcon style={styles.eyeIcon}></SvgImages.EyeIcon>
          <Text style={styles.viewDetailsText}>View details</Text>
        </View>
      </View>
    </View>
  );
};

export default function ElectricityListCard() {
  return (
    <View style={styles.mainContainer}>
      <TitleBar title='Electricity'></TitleBar>
      <View style={styles.container}>
        {mockData.map((item) => (
          <ListItem
            key={item.id}
            amount={item.amount}
            currency={item.currency}
            time={item.time}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    marginTop:metrics.defaultMargin
  },
  container: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: metrics.defaultMargin,
  },
  listItemContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.lightGrey,
    paddingVertical: metrics.smallMargin,
  },
  amountText: {
    fontFamily: fontsFamily.primaryBold,
    color: Colors.black,
    fontSize: fontSize.normal,
    marginBottom: metrics.xsmallMargin,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeText: {
    fontSize: fontSize.medium_12,
    fontFamily: fontsFamily.primary,
  },
  viewDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    marginRight: 5,
  },
  viewDetailsText: {
    fontSize: fontSize.medium_12,
    fontFamily: fontsFamily.primary,
  },
});
