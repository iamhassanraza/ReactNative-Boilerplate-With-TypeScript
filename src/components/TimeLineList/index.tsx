import React from 'react';
import { View, FlatList } from 'react-native';
import TimeLineListItem, { TimeLineListItemProps } from './TimelineListItem';

interface TimelineListProps {
  data: TimeLineListItemProps[];
}

const TimeLineList: React.FC<TimelineListProps> = (props) => {
  return (
    <View>
      {props.data.map((item, index) => <TimeLineListItem
        key={item.month}
        month={item.month}
        amount={item.amount}
        date={item.date}
      />)}

    </View>
  );
};

export default TimeLineList;
