import { FlatList, Text, View, StyleSheet } from 'react-native'
import React, { useCallback } from 'react'
import { Button } from '@react-native-material/core'
import { useDispatch, useSelector } from 'react-redux'
import { MachineTypeActions } from 'store/actions/machineTypeActions'
import { StoreState } from 'store/states/root/RootState'
import { Attribute, IMachine } from 'store/types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Icons } from 'constants/Icons';
import MachineFormAttribute from './Components/MachineFormAttribute'
import { styles } from './styles'

export interface MachineFormCard {
    machineTypeId: string,
    machineId: string,
    attributes: { [key: string]: any }

}

function MachineFormCard(props: MachineFormCard) {

    const { machineId, attributes: attributeprops, machineTypeId } = props
    const attributes = useSelector((state: StoreState) => state.machines.types.find((value) => value.id === machineTypeId))?.attributes
    const dispatch = useDispatch()

    const updateMachineAttribute = useCallback(
        (keyToUpdate: string, updatedValue: any) => {
            const updatedImachine: IMachine = {
                id: machineId,
                typeId: machineTypeId,
                attributes: {
                    ...attributeprops,
                    [keyToUpdate]: updatedValue
                }
            }
            dispatch(MachineTypeActions.editMachine(machineId, updatedImachine))
        },
        [machineId, machineTypeId, attributeprops, dispatch],
    );

    const onRemoveMachinePress = useCallback(() => {
        dispatch(MachineTypeActions.deleteMachine(machineId));
    }, [machineId, dispatch]);

    const keyExtractor = (item: Attribute, index: number) => item.id + ' ' + index

    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.title}>Category Details</Text>

                <FlatList
                    keyExtractor={keyExtractor}
                    showsVerticalScrollIndicator={false}
                    data={attributes}
                    renderItem={({ item }) => {
                        return <MachineFormAttribute value={attributeprops[item.id]} updateMachineAttribute={updateMachineAttribute} attribute={item}></MachineFormAttribute>
                    }}
                />

                <Button
                    onPress={onRemoveMachinePress}
                    leading={(props) => <Icon {...props} name={Icons.TrashCan} />}
                    style={styles.buttonStyles}
                    variant="text"
                    title="REMOVE"
                />
            </View>
        </View>
    );

}



export default React.memo(MachineFormCard)