import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

import enhancer, { middlewares } from './createEnhancer';
import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const persistedReducer = persistReducers(rootReducer);

const Store = createStore(persistedReducer, enhancer);
const Persistor = persistStore(Store);

middlewares.saga.run(rootSaga);

export { Store, Persistor };
