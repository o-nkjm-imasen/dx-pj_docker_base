import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import logger from 'redux-logger';
//import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router'
//import rootSaga from './sagas'
import * as reducers from './reducers';

// get history instance from src/index.js
export default function createStore(history) {
  // const sagaMiddleware = createSagaMiddleware()
  const store = reduxCreateStore(
    combineReducers({
      ...reducers,
      // Reducer from react-router-redux (Depricated)
      // router: routerReducer,
      // Reducer from connected-react-router
      router: connectRouter(history),
    }),
    applyMiddleware(
      logger,
      // Redux Middleware from  react-router-redux
      routerMiddleware(history),
      // redux-sagas
      //sagaMiddleware
    )
  );
  // Redux-saga run
  // sagaMiddleware.run(rootSaga);
  return store
}
