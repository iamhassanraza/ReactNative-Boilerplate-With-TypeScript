import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigator from 'utils/Navigator'
import { MainRoutes } from 'navigation/HomeStack'
import { Button } from '@react-native-material/core'
import CategoryList from 'components/CategoryList'
import { useSelector } from 'react-redux'
import { StoreState } from 'store/states/root/RootState'

export default function Dashboard() {
  const onManageCategoryPress = () => {
    Navigator.navigate(MainRoutes.ManageCategories)
  }

  const Types = useSelector((state: StoreState) => state.machines.types)


  if (Types.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={onManageCategoryPress} style={{ alignSelf: 'center', }} title='Manage Categories'></Button>
      </View>
    )
  }

  return (<View style={{ flex: 1 }}>
    <FlatList
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      data={Types}
      renderItem={({ item: type }) => <CategoryList machineTypeId={type.id}></CategoryList>
      }
      ListEmptyComponent={() => {
        return <Text>There Are No Items</Text>
      }}

    />

  </View>)



}

const styles = StyleSheet.create({})