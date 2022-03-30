import CustomButton from 'components/Button';
import CustomTextInput from 'components/CustomTextInput';
import Post from 'models/post/Post';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {styles} from 'screens/Home/HomeScreen.styles';
import {PostActions} from 'store/actions/postActions';
import {spacing} from 'theme';
import Navigator from 'utils/Navigator';

export default function AddPost() {
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const dispatch = useDispatch();
  const onButtonPress = () => {
    if (title !== '' && description !== '') {
      const post: Post = {
        userId: 1,
        id: Math.random(),
        title: title,
        body: description,
      };
      dispatch(PostActions.addPost(post));
      Navigator.goBack();
    }
  };

  return (
    <View style={{padding: spacing.large, flex: 1}}>
      <CustomTextInput
        title={'TITLE'}
        value={title}
        onChangeText={(text: string) => {
          settitle(text);
        }}
        placeholder={'Enter Title'}></CustomTextInput>

      <CustomTextInput
        title={'DESCRIPTION'}
        value={description}
        multiline={true}
        numberOfLines={5}
        height={200}
        onChangeText={(text: string) => {
          setdescription(text);
        }}
        placeholder={'Enter Title'}></CustomTextInput>

      <View style={styles.buttonContainer}>
        <CustomButton onPress={onButtonPress} text="Submit"></CustomButton>
      </View>
    </View>
  );
}
