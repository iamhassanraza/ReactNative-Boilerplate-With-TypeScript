import React, {useState} from 'react';
import {ReactNode} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import DatePicker from 'react-native-date-picker';

interface CustomDatePickerProps {
  children: ReactNode;
}

export default function CustomDatePicker(props: CustomDatePickerProps) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
