import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from 'screens/Home';
import Login from 'screens/Authentication/Login';
import ForgotPassword from 'screens/Authentication/ForgotPassword';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from 'theme';
import { fontsFamily, fontSize, scaleFont } from 'theme/fonts';
import metrics, { SCREEN_HEIGHT } from 'theme/metrics';
import ProfileScreen from 'screens/Profile';
import { MainRoutes } from './HomeStack';
import ServiceCallStatus from 'screens/ServiceCallStatus';

const Tab = createBottomTabNavigator();

const CustomBottomNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName={MainRoutes.Home}
      screenOptions={{
       headerShown:false,
       tabBarActiveTintColor:Colors.primary,
       tabBarLabelStyle:{
        fontSize:fontSize.medium_12,
        fontFamily:fontsFamily.primaryBold
       },
     
      }}
    >
      <Tab.Screen
        name="Status"
        component={ServiceCallStatus}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcon name="chart-arc" color={color} size={scaleFont(40)} />
          ),
          tabBarLabel: 'Status',
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcon name="view-dashboard-outline" color={color} size={scaleFont(35)} />
          ),
          tabBarLabel: 'Dashboard',
        }}
      />
      <Tab.Screen
        name="Tab3"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle-o" color={color} size={scaleFont(30)} />
          ),
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};

export default CustomBottomNavigator;
