import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import metrics from 'theme/metrics'
import { fontSize } from 'theme/fonts'
import { TextInput, Button } from "@react-native-material/core";
import CustomButton from 'components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Icons } from 'constants/Icons';
import PopUpMenu from 'components/PopupMenu';
import { InputTypesArray } from 'constants/InputTypes';
import { Attribute, IMachineType, InputTypes } from 'store/types';
import { Colors } from 'theme';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from 'store/states/root/RootState';
import { MachineTypeActions } from 'store/actions/machineTypeActions';
import uuid from 'react-native-uuid'
import AttributeField from './Components/AttributeField';

interface MachineTypeFormProps extends IMachineType { }

export default function MachineTypeFormCard(props: MachineTypeFormProps) {



  const categoryName = useSelector((state: StoreState) => {
    const machineType = state.machines.types.find(type => type.id === props.id);
    return machineType ? machineType.categoryName : '';
  });


  const machineTypeId = props.id

  const dispatch = useDispatch()


  const onChangeCategoryNameText = (text: string) => {
    dispatch(MachineTypeActions.editMachineType(machineTypeId, {
      ...props,
      categoryName: text
    }))
  }

  const onAddNewField = (value: InputTypes) => {
    try {
      const newAttribute: Attribute = {
        id: uuid?.v4()?.toString(),
        label: 'Field',
        type: value
      }
      dispatch(MachineTypeActions.addAttribute(machineTypeId, newAttribute))
    } catch (error) {
      console.log({ error })
    }
  }

  const onRemoveCategoryPress = () => {
    dispatch(MachineTypeActions.deleteMachineType(machineTypeId))
  }



  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.categoryName}</Text>
      <TextInput onChangeText={onChangeCategoryNameText} value={categoryName} variant="outlined" label="Category Name" style={{ marginVertical: 16 }} />

      <FlatList
        keyExtractor={(item, index) => item.id + ' ' + index}
        showsVerticalScrollIndicator={false}
        data={props?.attributes || []}
        renderItem={({ item: value }) => <AttributeField
          id={value.id}
          machineTypeId={machineTypeId}
          label={value.label}
          type={value.type}
        />
        }
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
  )
}


const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.lightGrey,
    width: '100%',
    paddingVertical: metrics.heightPercentageToDP('2'),
    paddingHorizontal: '4%',
    marginBottom: '3%',
    backgroundColor: Colors.lightBackground,
  },
  title: { fontSize: fontSize.h4 },
  bottomButtonContainer: { flexDirection: 'row', marginTop: '4%' },
  iconButton: { margin: 0, padding: 0, justifyContent: 'flex-start' }
})