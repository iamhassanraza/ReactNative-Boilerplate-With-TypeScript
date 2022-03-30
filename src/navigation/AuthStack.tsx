import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FormScreen from 'screens/Form';
import {defaultNavigation} from './NavigationOptions';

//screen names for AUTHSTACK
export enum AuthRoutes {
  Form = 'Form',
}

// define the params your screen is going to use
export type AuthStackParamList = {
  [AuthRoutes.Form]: undefined;
};

export default function AuthStack() {
  const RootStack = createStackNavigator<AuthStackParamList>();
  return (
    <RootStack.Navigator
      screenOptions={defaultNavigation}
      initialRouteName={AuthRoutes.Form}>
      <RootStack.Screen name={AuthRoutes.Form} component={FormScreen} />
    </RootStack.Navigator>
  );
}
