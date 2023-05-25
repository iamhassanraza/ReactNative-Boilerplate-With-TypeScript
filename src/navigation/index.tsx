import React, {Component, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {useSelector} from 'react-redux';
import {navigationRef} from 'utils/Navigator';
import HomeStack from './HomeStack';
import {StoreState} from 'store/states/root/RootState';
import AuthStack from './AuthStack';
import Login from 'screens/Authentication/Login';
import ForgotPassword from 'screens/Authentication/ForgotPassword';
import SelectLanguage from 'screens/SelectLanguage';

const Navigation = () => {
  const user = useSelector((state: StoreState) => state.user.user);

  console.log({user})

  return (
    <NavigationContainer ref={navigationRef}>
      {/* {user ? <HomeStack /> : <AuthStack />} */}
      <SelectLanguage></SelectLanguage>
    </NavigationContainer>
  );
};

export default Navigation;
