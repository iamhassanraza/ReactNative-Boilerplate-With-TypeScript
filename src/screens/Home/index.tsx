import {MainRoutes} from 'navigation/HomeStack';
import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import UserAction from 'store/actions/userActions';
import Navigator from 'utils/Navigator';
import {StoreState} from 'store/states/root/RootState';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomTextInput from 'components/CustomTextInput';
export default function HomeScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UserAction.login({}));
  }, []);

  const state = useSelector((state: StoreState) => state);
  console.log(state);

  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => Navigator.navigate(MainRoutes.AddPost)}>
        <Text style={{fontFamily: 'ProductSans-Bold'}}>GO to post</Text>
        <Icon size={24} color="black" name="movie" />
        <CustomTextInput
          placeholder={'Some Place Holder'}
          title="TITLE"></CustomTextInput>
      </TouchableOpacity>
    </View>
  );
}
