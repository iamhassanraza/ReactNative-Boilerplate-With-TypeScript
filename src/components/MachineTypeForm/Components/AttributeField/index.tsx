import { View, TouchableOpacity } from 'react-native'
import React, { useCallback, useMemo } from 'react'
import metrics from 'theme/metrics'
import { TextInput } from "@react-native-material/core";
import CustomButton from 'components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Icons } from 'constants/Icons';
import PopUpMenu from 'components/PopupMenu';
import { InputTypesArray } from 'constants/InputTypes';
import { Attribute, IMachineType, InputTypes } from 'store/types';

import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from 'store/states/root/RootState';
import { MachineTypeActions } from 'store/actions/machineTypeActions';
import { styles } from './styles';

interface AttributeFieldProps extends Attribute {
    machineTypeId: string,
}

const AttributeField = (props: AttributeFieldProps) => {
    const { id, label, type, machineTypeId } = props
    const dispatch = useDispatch()

    console.log("RENDERED")

    const typeObj = useSelector((state: StoreState) => state.machines.types.find((type) => type.id === machineTypeId))
    const attribute = useMemo(() => typeObj?.attributes.find((attr) => attr.id === id), [id, typeObj])
    const FieldText = attribute?.label || ''

    const onChangeText = useCallback((text: string) => {
        dispatch(MachineTypeActions.editAttribute(machineTypeId, id, {
            ...props,
            label: text
        }))
    }, [dispatch, machineTypeId, id, props])

    const onChangeType = useCallback((type: InputTypes) => {
        dispatch(MachineTypeActions.editAttribute(machineTypeId, id, {
            ...props,
            type
        }))
    }, [dispatch, machineTypeId, id, props])

    const onDeleteAttribute = useCallback(() => {
        dispatch(MachineTypeActions.deleteAttribute(machineTypeId, id))
    }, [dispatch, machineTypeId, id])

    return (
        <View key={id} style={styles.container}>
            <View style={styles.textInputContainer}>
                <TextInput onChangeText={onChangeText} value={FieldText} variant="outlined" label={'Field'} style={styles.textInput} />
            </View>

            <PopUpMenu onSelect={onChangeType} optionsArray={InputTypesArray}>
                <CustomButton style={styles.button} variant="Outline" title={type} />
            </PopUpMenu>

            <TouchableOpacity onPress={onDeleteAttribute} style={styles.iconContainer}>
                <Icon size={metrics.heightPercentageToDP('3')} name={Icons.TrashCan}></Icon>
            </TouchableOpacity>
        </View>
    )
}

export default React.memo(AttributeField)
