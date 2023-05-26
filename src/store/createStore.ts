import { applyMiddleware, compose, createStore } from 'redux'
// import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore, createTransform } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import { rootReducer } from './reducers/rootReducer'


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [],
}

const configureStore = (rootReducer: any, rootSaga: any) => {
    const middleware = []
    const enhancers = []

    // Connect the sagas to the redux store
    // const sagaMiddleware = createSagaMiddleware()
    // middleware.push(sagaMiddleware)

    // enhancers.push(applyMiddleware(...middleware))

    // Redux persist
    const persistedReducer = persistReducer(persistConfig, rootReducer)

    const store = createStore(persistedReducer)
    const persistor = persistStore(store)
    // Kick off the root saga
    // sagaMiddleware.run(rootSaga)

    return { store, persistor }
}


export const { store, persistor } = configureStore(rootReducer, null)


