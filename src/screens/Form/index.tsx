import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {formTypes, RadioButtonOptions, UserFrom} from 'models/user/UserForm';
import CustomTextInput from 'components/CustomTextInput';
import CheckBoxGroup from 'components/CheckBoxGroup';
import Button from 'components/Button';
import CustomImagePicker from 'components/CustomImagePicker';
import {ImageConsts} from 'constants/Images';
import CustomDatePicker from 'components/CustomDatePicker';
import {StoreState} from 'store/states/root/RootState';
import {useDispatch, useSelector} from 'react-redux';
import UserAction from 'store/actions/userActions';

const data: UserFrom = require('../../mock/form-data.json');

interface IState {
  [key: string]: any;
}

export default function Form() {
  const [state, setstate] = useState<IState>({});
  const user = useSelector((state: StoreState) => state.user);
  const dispatch = useDispatch();

  console.log({user});

  useEffect(() => {
    //setting intial State
    data.map(value => {
      switch (value.type) {
        case formTypes.Input:
          setstate({...state, [value.key]: ''});
          break;
        case formTypes.RadioButton:
          setstate({...state, [value.key]: value.options[0]});
          break;
        case formTypes.DOB:
          setstate({...state, [value.key]: ''});
          break;
        case formTypes.Image:
          setstate({...state, [value.key]: ''});
          break;

        default:
          break;
      }
    });
  }, []);

  const onButtonPress = () => {
 
    dispatch(UserAction.login({...state}));
  };

  const mapData = (form: UserFrom) => {
    return form.map(value => {
      switch (value.type) {
        case formTypes.Input:
          return (
            <CustomTextInput
              title={value.label}
              key={value.id}
              value={state[value.key]}
              onChangeText={(text: string) =>
                setstate({...state, [value.key]: text})
              }
              placeholder={value.placeholder}></CustomTextInput>
          );
        case formTypes.RadioButton:
          return (
            <CheckBoxGroup
              id={value.id}
              key={value.id.toString()}
              label={value.label}
              value={state[value.key]}
              getSelectedValue={(selectedItem: RadioButtonOptions) => {
                setstate({...state, [value.key]: selectedItem});
              }}
              options={value.options}
            />
          );
        case formTypes.DOB:
          return (
            <CustomDatePicker
              title={value.label}
              value={state[value.key]}
              key={value.id}
              date={state[value.key]}
              onConfirm={date => {
                setstate({...state, [value.key]: date});
              }}></CustomDatePicker>
          );
        case formTypes.Image:
          return (
            <CustomImagePicker
              key={value.key}
              uri={state[value.key] || ImageConsts.profilePlaceHolder}
              onChange={selectedImage => {
                setstate({...state, [value.key]: selectedImage.path});
              }}></CustomImagePicker>
          );

        default:
          break;
      }
    });
  };

  return (
    <View style={{flex: 1, padding: 20}}>
      {mapData(data)}
      <Button onPress={onButtonPress} text={'Submit'}></Button>
    </View>
  );
}