import 'react-native-gesture-handler';
import React from 'react';
import {store, persistor} from 'store/createStore';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import Navigation from 'navigation';
import {RootSiblingParent} from 'react-native-root-siblings';

const App = () => {
  return (
    <RootSiblingParent>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation></Navigation>
        </PersistGate>
      </Provider>
    </RootSiblingParent>
  );
};

export default App;
