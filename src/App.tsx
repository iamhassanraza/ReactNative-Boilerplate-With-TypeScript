import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {store, persistor} from 'store/createStore';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import Navigation from 'navigation';
import {RootSiblingParent} from 'react-native-root-siblings';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

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
