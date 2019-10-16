import { compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor: __DEV__ ? console.tron.createSagaMonitor() : null,
});

const enhancer = __DEV__
  ? compose(
      applyMiddleware(sagaMiddleware),
      console.tron.createEnhancer(),
    )
  : applyMiddleware(sagaMiddleware);

export const middlewares = {
  saga: sagaMiddleware,
};

export default enhancer;
