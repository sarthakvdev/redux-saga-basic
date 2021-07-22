import { combineReducers, createStore } from "redux";
import counterReducer from "./ducks/counter";

// used to combine multiple reducers
const reducer = combineReducers({
  counter: counterReducer
});

// we need to paas reducer through it
const store = createStore(reducer);

export default store;
