import { combineReducers } from 'redux'
import { StoreState } from 'store/states/root/RootState'

import machinesReducer from 'store/reducers/machineType/machineTypeReducer'


export const rootReducer = combineReducers<StoreState>({
    machines: machinesReducer
})