import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Navigator from 'utils/Navigator';
import { MainRoutes } from 'navigation/HomeStack';
import { Button } from '@react-native-material/core';
import CategoryList from 'components/CategoryList';
import { useSelector } from 'react-redux';
import { StoreState } from 'store/states/root/RootState';
import { IMachineType } from 'store/types';

export default function Dashboard() {

  const Types = useSelector((state: StoreState) => state.machines.types);
  const onManageCategoryPress = () => { Navigator.navigate(MainRoutes.ManageCategories) };
  const renderEmptyList = () => <Text>There Are No Items</Text>;
  const renderCategoryList = ({ item: type }: { item: IMachineType }) => <CategoryList machineTypeId={type.id} />;
  const keyExtractor = (item: IMachineType) => item.id;

  if (Types.length === 0) {
    return (
      <View style={styles.container}>
        <Button onPress={onManageCategoryPress} style={styles.button} title="Manage Categories" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        data={Types}
        renderItem={renderCategoryList}
        ListEmptyComponent={renderEmptyList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignSelf: 'center',
  },
});
