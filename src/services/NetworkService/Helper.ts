import { Platform } from 'react-native';
import ResponseService from './ResponseService';
import FormData from 'form-data';

const timeout = 15000; // Set timeout from config

const defaultOptions = (authToken = null, params = null) => ({
  timeout,
  headers: {
    Authorization: authToken,
    'Content-Type': 'application/json',
  },
  params: params,
});

const defaultUploadOptions = (authToken: string) => ({
  timeout,
  headers: {
    Authorization: authToken,
    'Content-Type': 'multipart/form-data',
  },
});


//will change any to generic type later with time

const createFormData = (data: any) => {
  const form = new FormData();
  form.append('attachment', {
    uri: Platform.OS === 'android' ? data.uri : data.uri.replace('file://', ''),
    type: 'image/jpeg',
    name: 'picture',
  });
  form.append('type', 'channel');
  return form;
};

const handleResponse = (responsePromise: any) =>
  responsePromise
    .then((response: any) => {
      return ResponseService.parseSuccess(response);
    })
    .catch((error: any) => {
      console.error(error);
      return ResponseService.parseError(error);
    });

export { defaultOptions, defaultUploadOptions, createFormData, handleResponse };
