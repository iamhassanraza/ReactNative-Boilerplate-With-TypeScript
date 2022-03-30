// ====================================
// NOTE
// any type is being used all over network service due to lack of time
// will update it to generic types later in boilerplate
// ====================================


import axios from 'axios';
import { handleResponse, defaultOptions } from './Helper';
import _ from 'lodash';
import Config from 'config/Config';

const baseUrl = Config.API_URL; // Set baseurl from config


interface ApiBaseProps {
  resource: string
  authToken?: string | null
  params?: object | null
  options?: object | null
}

interface getApiProps extends ApiBaseProps { }

interface deleteApiProps extends ApiBaseProps { }

interface updateApiProps extends ApiBaseProps {
  data: object | undefined
}

interface postApiProps extends ApiBaseProps {
  data: object | undefined
}


const readResource = ({
  resource = '',
}: getApiProps) => {
  console.log(`${baseUrl}/${resource}`)
  return handleResponse(axios.get(`${baseUrl}/${resource}`));
};

// const deleteResource = ({
//   resource = '',
//   authToken = '',
//   params = {},
//   options = {},
// }: deleteApiProps) => {
//   const selectedOptions: any = _.isEmpty(options)
//     ? defaultOptions(authToken, params)
//     : options;
//   return handleResponse(
//     axios.delete(`${baseUrl}/${resource}`, selectedOptions),
//   );
// };

// const updateResource = ({
//   resource = '',
//   authToken = '',
//   params = {},
//   options = {},
//   data = {}
// }: updateApiProps) => {
//   const selectedOptions: any = _.isEmpty(options)
//     ? defaultOptions(authToken, params)
//     : options;
//   return handleResponse(
//     axios.post(`${baseUrl}/${resource}`, data, selectedOptions),
//   );
// };

// const createResource = ({
//   resource = '',
//   data = undefined,
//   authToken = null,
//   options = null,
//   params = null,
// }) => {
//   const selectedOptions: any = _.isEmpty(options)
//     ? defaultOptions(authToken, params)
//     : options;
//   return handleResponse(
//     axios.put(`${baseUrl}/${resource}`, data, selectedOptions),
//   );
// };

export {
  readResource,
  // deleteResource, updateResource, createResource 
};
