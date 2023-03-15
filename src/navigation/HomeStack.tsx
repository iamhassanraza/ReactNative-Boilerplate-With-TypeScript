import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from 'screens/Dashboard';
import CategoryDetails from 'screens/CategoryDetails';
import ManageCategories from 'screens/ManageCategories';
import { defaultNavigation } from './NavigationOptions';

//screen names for drawer navigation
export enum MainRoutes {
  Home = 'Home',
  AddPost = 'AddPost',
  Dashboard = 'Dashboard',
  ManageCategories = 'Manage Categories',
  CategoryDetails = 'CategoryDetails'
}

// define the params your screen is going to use
export type MainDrawerParamList = {
  [MainRoutes.ManageCategories]: undefined;
  [MainRoutes.CategoryDetails]: undefined;
  [MainRoutes.Dashboard]: undefined;
};

export default function MainDrawer() {
  const Drawer = createDrawerNavigator<MainDrawerParamList>();
  return (
    <Drawer.Navigator
      initialRouteName={MainRoutes.Dashboard}
      // screenOptions={defaultNavigation}
      >
      <Drawer.Screen name={MainRoutes.Dashboard} component={Dashboard} />
      <Drawer.Screen name={MainRoutes.ManageCategories} component={ManageCategories} />
      <Drawer.Screen name={MainRoutes.CategoryDetails} component={CategoryDetails} />
    </Drawer.Navigator>
  );
}