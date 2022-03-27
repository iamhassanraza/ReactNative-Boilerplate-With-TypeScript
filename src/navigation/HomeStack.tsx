import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from 'screens/HomeScreen';
import AddPostScreen from 'screens/AddPostScreen';

//screen names for homestack
export enum MainRoutes {
  Home = 'Home',
  AddPost = 'AddPost',
  Loading = 'Loading',
  Settings = 'Settings',
}

// define the params your screen is going to use
export type MainStackParamList = {
  [MainRoutes.AddPost]: undefined;
  [MainRoutes.Loading]: undefined;
  [MainRoutes.Home]: {update: boolean} | undefined; // just an example, "update" will later be used for version checks
  [MainRoutes.Settings]: undefined;
};

export default function HomeStack() {
  const RootStack = createStackNavigator<MainStackParamList>();
  return (
    <RootStack.Navigator initialRouteName={MainRoutes.Home}>
      <RootStack.Screen name={MainRoutes.Home} component={HomeScreen} />
      <RootStack.Screen name={MainRoutes.AddPost} component={AddPostScreen} />
    </RootStack.Navigator>
  );
}
