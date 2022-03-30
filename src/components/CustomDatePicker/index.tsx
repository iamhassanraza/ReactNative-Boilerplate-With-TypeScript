import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Colors} from 'theme';
import {styles} from './CustomDatePicker.styles';

interface CustomDatePickerProps {
  date: Date;
  onConfirm: (date: Date) => void;
  onCencel?: () => void;
  value: string;
  title:string
}

export default function CustomDatePicker(props: CustomDatePickerProps) {
  const [open, setOpen] = useState(false);
  return (
    <View>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <View style={{}}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.container}>
          <Text>
            {!props.value ? (
              <Text style={{color: Colors.lightGrey}}> Enter Date</Text>
            ) : (
              props.value.toString()
            )}
          </Text>
        </View>
      </TouchableOpacity>

      <DatePicker
        modal
        open={open}
        date={props.date || new Date()}
        onConfirm={date => {
          setOpen(false);
          props.onConfirm(date);
        }}
        onCancel={() => {
          setOpen(false);
          props.onCencel && props.onCencel();
        }}
      />
    </View>
  );
}
