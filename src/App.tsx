import React from 'react';
import HomeScreen from 'screens/HomeScreen';
import {store, persistor} from 'store/createStore';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HomeScreen></HomeScreen>
      </PersistGate>
    </Provider>
  );
};

export default App;
