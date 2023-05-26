import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'screens/Home';
import Notifications from 'screens/Notifications';
import CustomBottomNavigator from './TabNavigator';
import RentDetails from 'screens/RentDetails';
import ServiceFeeDetails from 'screens/ServiceFeeDetails';
import ServiceCallStatus from 'screens/ServiceCallStatus';
import ServiceDetails from 'screens/ServiceDetails';
import SelectLanguage from 'screens/SelectLanguage';

//screen names for homestack
export enum MainRoutes {
  Home = 'Home',
  Notification = 'Notification',
  TabNavigator = 'TabNavigator',
  Profile = 'Profile',
  RentDetails = 'RentDetails',
  ServiceFeeDetails = 'ServiceFeeDetails',
  ServiceCallStatus = 'ServiceCallStatus',
  ServiceDetails = "ServiceDetails",
  SelectLanguage = "SelectLanguage"

}

// define the params your screen is going to use
export type MainStackParamList = {
  [MainRoutes.Home]: undefined;
  [MainRoutes.Profile]: undefined;
  [MainRoutes.TabNavigator]: undefined;
  [MainRoutes.Notification]: undefined;
  [MainRoutes.RentDetails]: undefined;
  [MainRoutes.ServiceFeeDetails]: undefined;
  [MainRoutes.ServiceCallStatus]: undefined;
  [MainRoutes.ServiceDetails]: undefined;
  [MainRoutes.SelectLanguage]: undefined;

};

export default function HomeStack() {
  const RootStack = createStackNavigator<MainStackParamList>();
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName={MainRoutes.TabNavigator}>

      <RootStack.Screen name={MainRoutes.TabNavigator} component={CustomBottomNavigator} />
      <RootStack.Screen name={MainRoutes.Notification} component={Notifications} />
      <RootStack.Screen name={MainRoutes.RentDetails} component={RentDetails} />
      <RootStack.Screen name={MainRoutes.ServiceFeeDetails} component={ServiceFeeDetails} />
      <RootStack.Screen name={MainRoutes.ServiceCallStatus} component={ServiceCallStatus} />
      <RootStack.Screen name={MainRoutes.ServiceDetails} component={ServiceDetails} />
      <RootStack.Screen name={MainRoutes.SelectLanguage} component={SelectLanguage} />
    </RootStack.Navigator>
  );
}
