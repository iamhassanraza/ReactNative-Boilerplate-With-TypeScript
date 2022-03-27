import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import UserAction from 'store/actions/userActions';

export default function HomeScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UserAction.login({}));
  }, []);

  const state = useSelector(state => state)
  console.log(state)
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}
