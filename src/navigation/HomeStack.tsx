import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'screens/Home';

//screen names for homestack
export enum MainRoutes {
  Home = 'Home',
}

// define the params your screen is going to use
export type MainStackParamList = {
  [MainRoutes.Home]: undefined;
};

export default function HomeStack() {
  const RootStack = createStackNavigator<MainStackParamList>();
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={MainRoutes.Home}>
      <RootStack.Screen name={MainRoutes.Home} component={HomeScreen} />
    </RootStack.Navigator>
  );
}
