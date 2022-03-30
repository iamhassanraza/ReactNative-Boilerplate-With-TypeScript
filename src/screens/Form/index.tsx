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
import Validator from 'utils/Validator';
import {errorToast} from 'utils/Toast';
const data: UserFrom = require('../../mock/form-data.json');

interface IState {
  [key: string]: any;
}

export default function Form() {
  const [state, setstate] = useState<IState>({});
  const user = useSelector((state: StoreState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const tempstate: IState = {};
    data.map(value => {
      switch (value.type) {
        case formTypes.Input:
          tempstate[value.key] = '';
          break;
        case formTypes.RadioButton:
          tempstate[value.key] = value.options[0];
          // state = {...state, [value.key]: };
          break;
        case formTypes.DOB:
          console.log('setting dob', {[value.key]: ''});
          tempstate[value.key] = '';
          break;
        case formTypes.Image:
          tempstate[value.key] = '';
          break;

        default:
          break;
      }
    });

    //setstaet is an async function , we should not call setstate in a loop
    setstate(tempstate);
  }, []);

  const validateForm = (): boolean => {
    let isValid = true;
    let error = '';
    data.forEach(value => {
      if (
        value.required &&
        value.key === 'email' &&
        !Validator.isEmailValid(state[value.key])
      ) {
        isValid = false;
        error = value.key + ' is invalid';
      }
      if (value.required && state[value.key] === '') {
        isValid = false;
        error = value.key + ' is empty';
      }
    });

    if (!isValid) {
      errorToast(error);
    }

    console.log(isValid, error);
    return isValid;
  };

  const onButtonPress = () => {
    if (validateForm()) {
      dispatch(UserAction.login({...state}));
    }
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
