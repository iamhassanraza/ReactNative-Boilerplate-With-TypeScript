import {Text, View, FlatList } from 'react-native'
import React, { useCallback } from 'react'
import { TextInput, Button } from "@react-native-material/core";
import CustomButton from 'components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Icons } from 'constants/Icons';
import PopUpMenu from 'components/PopupMenu';
import { InputTypesArray } from 'constants/InputTypes';
import { Attribute, IMachineType, InputTypes } from 'store/types';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from 'store/states/root/RootState';
import { MachineTypeActions } from 'store/actions/machineTypeActions';
import uuid from 'react-native-uuid'
import AttributeField from './Components/AttributeField';
import { styles } from './styles';


interface MachineTypeFormProps extends IMachineType { }

export default function MachineTypeFormCard(props: MachineTypeFormProps) {

  const categoryName = useSelector((state: StoreState) => {
    const machineType = state.machines.types.find(type => type.id === props.id);
    return machineType ? machineType.categoryName : '';
  });

  const machineTypeId = props.id;

  const dispatch = useDispatch();

  const onChangeCategoryNameText = useCallback((text: string) => {
    dispatch(MachineTypeActions.editMachineType(machineTypeId, {
      ...props,
      categoryName: text
    }));
  }, [dispatch, machineTypeId, props]);

  const onAddNewField = useCallback((value: InputTypes) => {
    try {
      const newAttribute: Attribute = {
        id: uuid?.v4()?.toString(),
        label: 'Field',
        type: value
      };
      dispatch(MachineTypeActions.addAttribute(machineTypeId, newAttribute));
    } catch (error) {
      console.log({ error });
    }
  }, [dispatch, machineTypeId]);

  const onRemoveCategoryPress = useCallback(() => {
    dispatch(MachineTypeActions.deleteMachineType(machineTypeId));
  }, [dispatch, machineTypeId]);

  const renderAttributeField = useCallback(({ item: value }) => (
    <AttributeField
      id={value.id}
      machineTypeId={machineTypeId}
      label={value.label}
      type={value.type}
    />
  ), [machineTypeId]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.categoryName}</Text>
      <TextInput onChangeText={onChangeCategoryNameText} value={categoryName} variant="outlined" label="Category Name" style={{ marginVertical: 16 }} />

      <FlatList
        keyExtractor={(item, index) => item.id + ' ' + index}
        showsVerticalScrollIndicator={false}
        data={props?.attributes || []}
        renderItem={renderAttributeField}
      />

      <PopUpMenu onSelect={(value) => { }} optionsArray={InputTypesArray}>
        <CustomButton variant='Filled' title={`TITLE FIELD : ${props.titleAttribute}`}></CustomButton>
      </PopUpMenu>

      <View style={styles.bottomButtonContainer}>

        <PopUpMenu onSelect={onAddNewField} optionsArray={InputTypesArray}>
          <CustomButton variant="Outline" title={`ADD NEW FIELD`}></CustomButton>
        </PopUpMenu>


        <Button
          onPress={onRemoveCategoryPress}
          leading={props => <Icon {...props}
            name={Icons.TrashCan}></Icon>}
          style={styles.iconButton} variant='text' title="REMOVE" />
      </View>

    </View>
  );
}

