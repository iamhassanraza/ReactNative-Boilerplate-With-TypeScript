import { View, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { RouteProp } from '@react-navigation/native';
import metrics from 'theme/metrics'
import { MainDrawerParamList, MainRoutes } from 'navigation/HomeStack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import CategoryList from 'components/CategoryList';

type CategoryDetailsScreenRouteProp = RouteProp<MainDrawerParamList, MainRoutes.CategoryDetails>;
type NavigationProp = DrawerNavigationProp<MainDrawerParamList, MainRoutes.CategoryDetails>;


type CategoryDetailsProps = {
  route: CategoryDetailsScreenRouteProp;
  navigation: NavigationProp
};

export default function CategoryDetails(props: CategoryDetailsProps) {
  const { id: selectedTypeId, categoryName } = props.route.params.params

  useLayoutEffect(() => {
    props.navigation.setOptions({ title: `Details: ${categoryName}` });
  }, [props.navigation, selectedTypeId, categoryName]);


  return (
    <View style={styles.container}>
      <CategoryList machineTypeId={selectedTypeId}></CategoryList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '3%',
    paddingBottom: metrics.heightPercentageToDP('15'),
  },
});
