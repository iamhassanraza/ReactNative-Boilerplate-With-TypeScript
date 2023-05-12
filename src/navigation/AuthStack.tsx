import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import ForgotPassword from 'screens/Authentication/ForgotPassword';
import Login from 'screens/Authentication/Login';

//screen names for AUTHSTACK
export enum AuthRoutes {
  Login = 'Login',
  ForgotPassword = 'ForgotPassword'
}

// define the params your screen is going to use
export type AuthStackParamList = {
  [AuthRoutes.Login]: undefined;
  [AuthRoutes.ForgotPassword]: undefined;
};

export default function AuthStack() {
  const RootStack = createStackNavigator<AuthStackParamList>();
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // gestureEnabled: true,
        // gestureDirection: "vertical",
      }}
      initialRouteName={AuthRoutes.Login}>
      <RootStack.Screen name={AuthRoutes.Login} component={Login} />
      <RootStack.Screen name={AuthRoutes.ForgotPassword} component={ForgotPassword} />
    </RootStack.Navigator>
  );
}
