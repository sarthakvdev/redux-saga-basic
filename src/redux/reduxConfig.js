/* now to add redux saga, I need to add sagaMiddleware
and set it to the store */

import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import counterReducer from "./ducks/counter";
import userReducer from "./ducks/user";
import { watcherSaga } from "./sagas/rootSaga";

// used to combine multiple reducers
const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer
});

// created middleware called sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Making an array, in case >1 middlewares
const middleware = [sagaMiddleware];

// createStore(reducer, {}, middleware)
const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
