import React, { Component, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useSelector } from 'react-redux';
import { navigationRef } from 'utils/Navigator';
import HomeStack from './HomeStack';
import { StoreState } from 'store/states/root/RootState';

const Navigation = () => {

  return (
    <NavigationContainer ref={navigationRef}>
      <HomeStack />
    </NavigationContainer>
  );
};

export default Navigation;
