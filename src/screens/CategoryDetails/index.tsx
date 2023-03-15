
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { fontSize } from 'theme/fonts'
import { Button, Switch, TextInput } from '@react-native-material/core'
import { Colors } from 'theme'
import DatePicker from 'react-native-date-picker'
import { useDispatch, useSelector } from 'react-redux'
import { MachineTypeActions } from 'store/actions/machineTypeActions'
import { StoreState } from 'store/states/root/RootState'
import { IMachine } from 'store/types'
import uuid from "react-native-uuid"
import metrics from 'theme/metrics'

interface MachineFormCard {
  machineTypeId: string,
  machineId: string,
  attributes: { [key: string]: any }

}

function MachineFormCard(props: MachineFormCard) {
  const [openDateModal, setopenDateModal] = useState(false)
  const selectedTypeId = useSelector((state: StoreState) => state?.machines?.types[0]?.id)
  const categoryName = useSelector((state: StoreState) => state.machines.types[0].categoryName)
  const machineTypeId = props.machineTypeId
  const machineId = props.machineId
  const attributeprops = props.attributes
  const attributes = useSelector((state: StoreState) => state.machines.types[0].attributes)


  if(!selectedTypeId){
    return null
  }


  return (
    <View style={{ marginBottom: '5%' }}>
      <DatePicker
        modal
        open={openDateModal}
        date={new Date()}
        onConfirm={date => {
          setopenDateModal(false);
        }}
        onCancel={() => {
          setopenDateModal(false);
        }}
      />
      <View style={{ padding: '5%', backgroundColor: Colors.lightBackground, borderWidth: 1, borderColor: Colors.lighterGrey, borderRadius: 5 }}>

        <Text style={{ fontSize: fontSize.titleMedium, marginBottom: '5%' }}>CategoryDetails</Text>

        <FlatList
          keyExtractor={(item, index) => item.id + ' ' + index}
          showsVerticalScrollIndicator={false}
          data={attributes}
          // style={{ marginBottom: metrics.heightPercentageToDP('7') }}
          renderItem={({ item: value }) => {
            switch (value.type) {
              case "Date":
                return <TextInput style={{ marginBottom: '5%' }} onPressIn={() => {
                  setopenDateModal(true)
                }} editable={false} value={""} variant="outlined" label={value.label} />
              case "Text":
                return <TextInput 
                  onChangeText={(text) => {}}
                  value={''}
                  style={{ marginBottom: '5%' }}
                  variant="outlined"
                  label={value.label} />
              case "CheckBox":
                return <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                  <Switch value={false} onValueChange={(e) => {
                    const updatedImachine: IMachine = {
                      id: machineId,
                      typeId: machineTypeId,
                      attributes: {
                        ...attributeprops,
                        [value.id]: e
                      }
                    }

                    MachineTypeActions.editMachine(props.machineId, updatedImachine)
                  }} />
                  <Text style={{ marginLeft: '3%', fontWeight: '500', fontSize: fontSize.medium_15 }}>{value.label}</Text>
                </View>

              case "Number":
                return <TextInput keyboardType="number-pad" style={{ marginBottom: '5%' }} value={""} variant="outlined" label={value.label} />

              default:
                return null;
            }


          }
          }
        />

      </View>
    </View>
  )
}







export default function CategoryDetails() {
  const [openDateModal, setopenDateModal] = useState(false)
  const selectedTypeId = useSelector((state: StoreState) => state.machines.types[0].id)
  const categoryName = useSelector((state: StoreState) => state.machines.types[0].categoryName)
  const attributes = useSelector((state: StoreState) => state.machines.types[0].attributes)
  const machines = useSelector((state: StoreState) => state.machines.machines)


  const dispatch = useDispatch()

  const onAddItemPress = () => {
    var obj: { [key: string]: any } = {}
    attributes.forEach(attr => {
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


    const machine: IMachine = {
      id: uuid?.v4()?.toString(),
      typeId: selectedTypeId,
      attributes: obj
    }
    dispatch(MachineTypeActions.addMachine(machine))

  }

  return (
    <View style={{ paddingHorizontal: '3%' }}>

      <View style={{ flexDirection: 'row', justifyContent: "space-between", padding: '3%' }}>
        <Text style={{ fontSize: fontSize.h5 }}>{categoryName}</Text>
        <Button onPress={onAddItemPress} title="Add Item"></Button>
      </View>

      <FlatList
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        data={machines}
        style={{ marginBottom: metrics.heightPercentageToDP('5') }}
        renderItem={({ item: machine }) => <MachineFormCard
          machineTypeId={machine.typeId}
          machineId={machine.id}
          attributes={machine.attributes} />
        }
        ListEmptyComponent={() => {
          return <Text>There Are No Items</Text>
        }}

      />
    </View>
  )
}
