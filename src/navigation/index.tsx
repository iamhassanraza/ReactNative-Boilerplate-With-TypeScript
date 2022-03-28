import React, {Component, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {useSelector} from 'react-redux';
import {navigationRef} from 'utils/Navigator';
import HomeStack from './HomeStack';
import {StoreState} from 'store/states/root/RootState';

const Navigation = () => {
  const user = useSelector((state: StoreState) => state.user.user);

  return (
    <NavigationContainer ref={navigationRef}>
      {true ? <HomeStack /> : null}
    </NavigationContainer>
  );
};

export default Navigation;
