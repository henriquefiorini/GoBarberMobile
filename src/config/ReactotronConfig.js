/**
 * Initialize the Reactotron debugger
 * on development environments.
 *
 * OBS: If the connection fails try running:
 * > adb reverse tcp:9090 tcp:9090
 *
 */

import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  // Initialize Reactotron
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .useReactNative()
    .connect();

  // Assign Reactotron to the console object
  console.tron = tron;

  // Clear timeline on App refresh
  tron.clear();
}
