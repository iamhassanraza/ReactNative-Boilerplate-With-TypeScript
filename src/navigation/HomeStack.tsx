import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from 'screens/Home';
import AddPostScreen from 'screens/AddPost';
import {defaultNavigation} from './NavigationOptions';

//screen names for homestack
export enum MainRoutes {
  Home = 'Home',
  AddPost = 'AddPost',
}

// define the params your screen is going to use
export type MainStackParamList = {
  [MainRoutes.AddPost]: undefined;
  [MainRoutes.Home]: {update: boolean} | undefined; // just an example, "update" will later be used for version checks
};

export default function HomeStack() {
  const RootStack = createStackNavigator<MainStackParamList>();
  return (
    <RootStack.Navigator
      screenOptions={defaultNavigation}
      initialRouteName={MainRoutes.Home}>
      <RootStack.Screen name={MainRoutes.Home} component={HomeScreen} />
      <RootStack.Screen name={MainRoutes.AddPost} component={AddPostScreen} />
    </RootStack.Navigator>
  );
}
