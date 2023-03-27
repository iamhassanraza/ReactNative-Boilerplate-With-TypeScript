
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

        const machine: IMachine = {
            id: uuid?.v4()?.toString(),
            typeId: machineTypeId,
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
                renderItem={({ item: machine }) => <MachineForm
                    machineTypeId={machine.typeId}
                    machineId={machine.id}
                    attributes={machine.attributes} />
                }
                ListEmptyComponent={() => {
                    return <Text style={{ marginVertical: '5%', alignSelf: 'center' }}>There Are No Items</Text>
                }}

            />
        </View>
    )
}
