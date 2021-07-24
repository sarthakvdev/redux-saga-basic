/* Now to add redux saga, I need to add sagaMiddleware 
  and set it to the store */

import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// reducers
import counterReducer from "./ducks/counter";
import userReducer from "./ducks/user";
// saga
import { watcherSaga } from "./sagas/rootSaga";

// used to combine multiple reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
});

// created middleware
const sagaMiddleware = createSagaMiddleware();

// Making an array, in case >1 middlewares
const middlewares = [sagaMiddleware];

// createStore(reducer, {}, middleware)
const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

sagaMiddleware.run(watcherSaga);

export default store;
