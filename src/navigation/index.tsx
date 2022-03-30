import React, {Component, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {useSelector} from 'react-redux';
import {navigationRef} from 'utils/Navigator';
import HomeStack from './HomeStack';
import {StoreState} from 'store/states/root/RootState';
import AuthStack from './AuthStack';

const Navigation = () => {
  const user = useSelector((state: StoreState) => state.user.user);

  return (
    <NavigationContainer ref={navigationRef}>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
