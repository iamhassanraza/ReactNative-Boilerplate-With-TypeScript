
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { fontSize } from 'theme/fonts'
import { RouteProp } from '@react-navigation/native';

import { Button, Switch, TextInput } from '@react-native-material/core'
import { Colors } from 'theme'
import DatePicker from 'react-native-date-picker'
import { useDispatch, useSelector } from 'react-redux'
import { MachineTypeActions } from 'store/actions/machineTypeActions'
import { StoreState } from 'store/states/root/RootState'
import { Attribute, IMachine } from 'store/types'
import uuid from "react-native-uuid"
import metrics from 'theme/metrics'
import { MainDrawerParamList, MainRoutes } from 'navigation/HomeStack';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import MachineForm from 'components/MachineFormCard'
import CategoryList from 'components/CategoryList';




type CategoryDetailsScreenRouteProp = RouteProp<MainDrawerParamList, MainRoutes.CategoryDetails>;
type NavigationProp = DrawerNavigationProp<MainDrawerParamList, MainRoutes.CategoryDetails>;


type CategoryDetailsProps = {
  route: CategoryDetailsScreenRouteProp;
  navigation: NavigationProp
};






export default function CategoryDetails(props: CategoryDetailsProps) {
  const [openDateModal, setopenDateModal] = useState(false)
  const { id: selectedTypeId, categoryName } = props.route.params.params
  // const selectedTypeId = useSelector((state: StoreState) => state.machines?.types[0]?.id)
  const attributes = useSelector((state: StoreState) => state.machines.types.find((value) => value.id === selectedTypeId)?.attributes)
  const machines = useSelector((state: StoreState) => state.machines.machines)




  // console.log("========",{attributes})
  useLayoutEffect(() => {
    props.navigation.setOptions({ title: `Details: ${categoryName}` });
  }, [props.navigation, selectedTypeId, categoryName]);


  if (!selectedTypeId) return null


  const dispatch = useDispatch()

  const onAddItemPress = () => {

    var obj: { [key: string]: any } = {}
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

    console.log({ obj })

    const machine: IMachine = {
      id: uuid?.v4()?.toString(),
      typeId: selectedTypeId,
      attributes: obj
    }
    dispatch(MachineTypeActions.addMachine(machine))

  }

  return (
    <View style={{ paddingHorizontal: '3%', paddingBottom: metrics.heightPercentageToDP('15') }}>
      <CategoryList machineTypeId={selectedTypeId}></CategoryList>
    </View>
  )
}
