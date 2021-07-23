import { takeLatest } from "redux-saga/effects";
import { GET_USER } from "../ducks/user"; // importing constant
import { handleGetUser } from "./handlers/users";

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}

/* 
When a GET_USER action is dispatched, watcherSaga() 
will take that action & call handleGetUser.
It will inturn do an fetch and get the data.
*/
