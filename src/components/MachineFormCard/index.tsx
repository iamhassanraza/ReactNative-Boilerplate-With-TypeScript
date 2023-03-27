import { FlatList, Text, View } from 'react-native'
import React, { useState } from 'react'
import { fontSize } from 'theme/fonts'

import { Button, Switch, TextInput } from '@react-native-material/core'
import { Colors } from 'theme'
import DatePicker from 'react-native-date-picker'
import { useDispatch, useSelector } from 'react-redux'
import { MachineTypeActions } from 'store/actions/machineTypeActions'
import { StoreState } from 'store/states/root/RootState'
import { IMachine } from 'store/types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Icons } from 'constants/Icons';


export interface MachineFormCard {
    machineTypeId: string,
    machineId: string,
    attributes: { [key: string]: any }

}



export default function MachineFormCard(props: MachineFormCard) {



    const [openDateModal, setopenDateModal] = useState(false)

    const machineTypeId = props.machineTypeId
    const attributes = useSelector((state: StoreState) => state.machines.types.find((value) => value.id === machineTypeId))?.attributes
    const machineId = props.machineId
    const attributeprops = props.attributes
    const dispatch = useDispatch()

    const updateMachineAttribute = (keyToUpdate: string, updatedValue: any) => {
        const updatedImachine: IMachine = {
            id: machineId,
            typeId: machineTypeId,
            attributes: {
                ...attributeprops,
                [keyToUpdate]: updatedValue
            }
        }
        dispatch(MachineTypeActions.editMachine(machineId, updatedImachine))

    }

    const onRemoveMachinePress = () => {
        dispatch(MachineTypeActions.deleteMachine(machineId))
    }


    return (
        <View style={{ marginBottom: '5%' }}>
            <View style={{ padding: '5%', backgroundColor: Colors.lightBackground, borderWidth: 1, borderColor: Colors.lighterGrey, borderRadius: 5 }}>

                <Text style={{ fontSize: fontSize.titleMedium, marginBottom: '5%' }}>Category Details</Text>

                <FlatList
                    keyExtractor={(item, index) => item.id + ' ' + index}
                    showsVerticalScrollIndicator={false}
                    data={attributes}
                    // style={{ marginBottom: metrics.heightPercentageToDP('7') }}
                    renderItem={({ item: value }) => {
                        switch (value.type) {
                            case "Date":
                                return <View>
                                    <DatePicker
                                        modal
                                        open={openDateModal}
                                        date={new Date()}
                                        onConfirm={date => {
                                            updateMachineAttribute(value.id, date.toDateString())
                                            setopenDateModal(false);
                                        }}
                                        onCancel={() => {
                                            setopenDateModal(false);
                                        }}
                                    />
                                    <TextInput style={{ marginBottom: '5%' }} onPressIn={() => {
                                        setopenDateModal(true)
                                    }} editable={false} value={attributeprops[value.id]} variant="outlined" label={value.label} />
                                </View>

                            case "Text":
                                return <TextInput
                                    onChangeText={(text) => {
                                        updateMachineAttribute(value.id, text)
                                    }}
                                    value={attributeprops[value.id]}
                                    style={{ marginBottom: '5%' }}
                                    variant="outlined"
                                    label={value.label} />
                            case "CheckBox":
                                return <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '5%' }}>
                                    <Switch value={attributeprops[value.id]} onValueChange={(e) => {
                                        updateMachineAttribute(value.id, e)

                                    }} />
                                    <Text style={{ marginLeft: '3%', fontWeight: '500', fontSize: fontSize.medium_15 }}>{value.label}</Text>
                                </View>

                            case "Number":
                                return <TextInput onChangeText={(text) => {
                                    updateMachineAttribute(value.id, text)
                                }} keyboardType="number-pad" style={{ marginBottom: '5%' }} value={attributeprops[value.id]} variant="outlined" label={value.label} />

                            default:
                                return null;
                        }


                    }
                    }
                />
                <Button
                    onPress={onRemoveMachinePress}
                    leading={props => <Icon {...props}
                        name={Icons.TrashCan}></Icon>}
                    style={{ margin: 0, padding: 0, justifyContent: 'flex-start' }} variant='text' title="REMOVE" />

            </View>
        </View>
    )
}
