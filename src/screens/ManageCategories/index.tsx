import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import metrics from 'theme/metrics'
import { Button } from '@react-native-material/core'
import { useDispatch, useSelector } from 'react-redux'
import { IMachineType } from 'store/types'
import uuid from 'react-native-uuid';
import { MachineTypeActions } from 'store/actions/machineTypeActions'
import { StoreState } from 'store/states/root/RootState'
import MachineTypeFormCard from 'components/MachineTypeForm'

export default function ManageCategories() {


  const machineTypes = useSelector((state: StoreState) => state.machines.types)

  const dispatch = useDispatch()

  const onAddCategoryPress = () => {
    const machineType: IMachineType = {
      id: uuid.v4().toString(),
      titleAttribute: "UNNAMED FIELD",
      categoryName: "New Category",
      attributes: [{
        id: uuid.v1().toString(),
        type: "Text",
        label: "Field"
      }]
    }
    dispatch(MachineTypeActions.addMachineType(machineType))
  }

  // return null

  return (
    <View style={{ flex: 1, padding: '5%' }}>
      <FlatList
        keyExtractor={(item, index) => item.id + ' ' + index}
        showsVerticalScrollIndicator={false}
        data={machineTypes}
        // style={{ marginBottom: metrics.heightPercentageToDP('7') }}
        renderItem={({ item: type }) => <MachineTypeFormCard
          id={type.id}
          attributes={type.attributes}
          titleAttribute={type.titleAttribute}
          categoryName={type.categoryName}

        ></MachineTypeFormCard>
        }
        ListEmptyComponent={() => {
          return <Text>There Are No Categories</Text>
        }}

      />
      <View style={styles.buttonContainer}>
        <Button onPress={onAddCategoryPress} title='Add Category'></Button>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: metrics.heightPercentageToDP('3'),
    width: '100%',
    alignSelf: 'center', position: 'absolute',
    bottom: 0
  }
})