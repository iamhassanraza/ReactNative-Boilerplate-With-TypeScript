import React, {useEffect} from 'react';
import {Text, View, ListRenderItem} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {StoreState} from 'store/states/root/RootState';

import {PostActions} from 'store/actions/postActions';
import {FlatList} from 'react-native-gesture-handler';
import Post from 'models/post/Post';
import {styles} from './HomeScreen.styles';
import CustomButton from 'components/Button';
import Navigator from 'utils/Navigator';
import {MainRoutes} from 'navigation/HomeStack';

export default function HomeScreen() {
  const postArray = useSelector((state: StoreState) => state.postReducer.post);
  const dispatch = useDispatch();


  useEffect(() => {}, [postArray?.length]);

  useEffect(() => {
    dispatch(PostActions.postFetchRequest());
  }, []);

  const renderItem: ListRenderItem<Post> = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDesc}>{item.body}</Text>
    </View>
  );

  const onButtonPress = () => {
    Navigator.navigate(MainRoutes.AddPost);
  };

  return (
    <View>
      <FlatList
        removeClippedSubviews={true}
        showsVerticalScrollIndicator={false}
        data={postArray}
        keyExtractor={(item, _) => item.id.toString()}
        renderItem={renderItem}
      />
      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={onButtonPress}
          text="Add New Post"></CustomButton>
      </View>
    </View>
  );
}
