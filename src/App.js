import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import { Store, Persistor } from './store';
import { Surface } from '~/components';
import Routes from './routes';

function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Surface>
          <Routes />
        </Surface>
      </PersistGate>
    </Provider>
  );
}

export default App;
