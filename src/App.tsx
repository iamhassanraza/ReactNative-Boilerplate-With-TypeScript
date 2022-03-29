import 'react-native-gesture-handler';
import React from 'react';
import {store, persistor} from 'store/createStore';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import Navigation from 'navigation';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation></Navigation>
      </PersistGate>
    </Provider>
  );
};

export default App;
