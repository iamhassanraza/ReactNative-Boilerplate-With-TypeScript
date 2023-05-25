import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles'; // Import the styles from the separate stylesheet

export interface TimeLineListItemProps {
  month: string;
  amount: string;
  date: string;
}

const TimeLineListItem: React.FC<TimeLineListItemProps> = ({ month, amount, date }) => {
  return (
    <View style={styles.listItemContainer}>
      <View style={styles.monthContainer}>
        <View style={styles.monthTextContainer}>
          <Text style={styles.monthText}>{month}</Text>
        </View>
        <View style={styles.timelineContainer}>
          <View style={styles.timelineInnerContainer}>
            <View style={styles.timelineLine}></View>
            <View style={styles.timelineDot}></View>
            <View style={styles.timelineLine}></View>
          </View>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View style={styles.itemInnerContainer}>
          <Text style={styles.itemAmount}>{amount}</Text>
          <Text style={styles.itemDate}>{date}</Text>
        </View>
      </View>
    </View>
  );
};

export default TimeLineListItem;
