import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from 'screens/Dashboard';
import CategoryDetails from 'screens/CategoryDetails';
import ManageCategories from 'screens/ManageCategories';
import { defaultNavigation } from './NavigationOptions';
import CustomDrawerContent from './Drawer';
import { IMachineType } from 'store/types';

//screen names for drawer navigation
export enum MainRoutes {
  Dashboard = 'Dashboard',
  ManageCategories = 'Manage Categories',
  CategoryDetails = 'CategoryDetails'
}

// define the params your screen is going to use
export type MainDrawerParamList = {
  [MainRoutes.ManageCategories]: undefined;
  [MainRoutes.CategoryDetails]: { params: IMachineType };
  [MainRoutes.Dashboard]: undefined;

};




export default function MainDrawer() {
  const Drawer = createDrawerNavigator<MainDrawerParamList>();
  return (
    <Drawer.Navigator
      initialRouteName={MainRoutes.Dashboard}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name={MainRoutes.Dashboard} component={Dashboard} />
      <Drawer.Screen name={MainRoutes.ManageCategories} component={ManageCategories} />
      <Drawer.Screen name={MainRoutes.CategoryDetails} component={CategoryDetails} />
    </Drawer.Navigator>
  );
}