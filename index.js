import './shim';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import React from 'react';
import App from './src/App';
import {persistor, store} from './src/store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import {initWeb3} from './src/remote/WalletOP';

// setTimeout(() => {
//     nodejs.start('loader.js');
// }, 1);

setTimeout(initWeb3, 2);

const WrappedApp = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => WrappedApp);
