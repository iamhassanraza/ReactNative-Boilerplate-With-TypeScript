import 'react-native-gesture-handler';
import 'translations/index'
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import { store, persistor } from 'store/createStore';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Navigation from 'navigation';
import { RootSiblingParent } from 'react-native-root-siblings';
import SplashScreen from 'react-native-splash-screen';

const App = () => {

  // const { t, i18n, ready } = useTranslation();
  // const [value, setValue] = useState('en');
  // const [items, setItems] = useState([
  //   {label: 'English', value: 'en'},
  //   {label: 'Chinese', value: 'zh'},
  // ]);
  // useEffect(() => {
  //   i18n.changeLanguage(value);
  // }, [value]);


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
