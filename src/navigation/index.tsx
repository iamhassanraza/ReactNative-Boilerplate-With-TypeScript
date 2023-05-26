import React, { Component, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useSelector } from 'react-redux';
import { navigationRef } from 'utils/Navigator';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';
import SelectLanguage from 'screens/SelectLanguage';
import { StoreState } from 'store/reducers/rootReducer';

const Navigation = () => {
  const isLoggedIn = useSelector((state: StoreState) => state.user.isLoggedIn);
  const currentLanguage = useSelector((state: StoreState) => state.language.currentLanguage);
  const isLanguageSelected = currentLanguage !== null
  return (
    <NavigationContainer ref={navigationRef}>
      {
        isLanguageSelected ?
          (isLoggedIn ? <HomeStack /> : <AuthStack />) :
          <SelectLanguage />}
    </NavigationContainer>
  );
};

export default Navigation;
