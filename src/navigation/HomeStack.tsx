import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import HomeScreen from 'screens/Home';
import AddPostScreen from 'screens/AddPost';
import FormScreen from 'screens/Form';
import {defaultNavigation} from './NavigationOptions';
//screen names for homestack
export enum MainRoutes {
  Home = 'Home',
  AddPost = 'AddPost',
  Form = 'Form',
  Settings = 'Settings',
}

// define the params your screen is going to use
export type MainStackParamList = {
  [MainRoutes.AddPost]: undefined;
  [MainRoutes.Form]: undefined;
  [MainRoutes.Home]: {update: boolean} | undefined; // just an example, "update" will later be used for version checks
  [MainRoutes.Settings]: undefined;
};

export default function HomeStack() {
  const RootStack = createStackNavigator<MainStackParamList>();
  return (
    <RootStack.Navigator
      screenOptions={defaultNavigation}
      initialRouteName={MainRoutes.Form}>
      <RootStack.Screen name={MainRoutes.Home} component={HomeScreen} />
      <RootStack.Screen name={MainRoutes.AddPost} component={AddPostScreen} />
      <RootStack.Screen name={MainRoutes.Form} component={FormScreen} />
    </RootStack.Navigator>
  );
}
