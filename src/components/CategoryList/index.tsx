import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { fontSize } from 'theme/fonts'

import { Button, } from '@react-native-material/core'
import { useDispatch, useSelector } from 'react-redux'
import { MachineTypeActions } from 'store/actions/machineTypeActions'
import { StoreState } from 'store/states/root/RootState'
import { Attribute, IMachine } from 'store/types'
import uuid from "react-native-uuid"
import metrics from 'theme/metrics'
import MachineForm from 'components/MachineFormCard'

type CategoryListProps = {
  machineTypeId: string
};

export default function CategoryList(props: CategoryListProps) {
  const machineTypeId = props.machineTypeId
  const attributes = useSelector((state: StoreState) => state.machines.types.find((value) => value.id === machineTypeId)?.attributes)
  const categoryName = useSelector((state: StoreState) => state.machines.types.find((value) => value.id === machineTypeId)?.categoryName)
  const machines = useSelector((state: StoreState) => state.machines.machines.filter((value) => value.typeId === machineTypeId))

  const dispatch = useDispatch()

  const onAddItemPress = () => {
    const obj = getInitialAttributesObject(attributes);
    const machine: IMachine = {
      id: uuid?.v4()?.toString(),
      typeId: machineTypeId,
      attributes: obj
    }
    dispatch(MachineTypeActions.addMachine(machine))
  }

  const getInitialAttributesObject = (attributes?: Attribute[]) => {
    const obj: { [key: string]: any } = {}
    attributes?.forEach(attr => {
      switch (attr.type) {
        case "CheckBox":
          obj[attr.id] = false
          return;
        case "Date":
          obj[attr.id] = new Date()
          return;
        case "Number":
          obj[attr.id] = 0
          return;
        case "Text":
          obj[attr.id] = ''
          return;
        default:
          break;
      }
    });
    return obj;
  }

  const renderEmptyListComponent = () => {
    return (
      <Text style={styles.emptyListText}>
        There Are No Items
      </Text>
    )
  }

  const renderItem = ({ item: machine }: { item: IMachine }) => {
    return (
      <MachineForm
        machineTypeId={machine.typeId}
        machineId={machine.id}
        attributes={machine.attributes}
      />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{categoryName}</Text>
        <Button onPress={onAddItemPress} title="Add Item" />
      </View>

      <FlatList
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        data={machines}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyListComponent}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '3%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: "space-between",
    padding: '3%'
  },
  title: {
    fontSize: fontSize.h5
  },
  emptyListText: {
    marginVertical: '5%',
    alignSelf: 'center'
  }
});
