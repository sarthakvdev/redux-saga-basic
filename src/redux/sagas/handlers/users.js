/*
handler: call the req function and store the data in redux store
yield: like await, waits for the call to finished before we move on
*/

import { call, put } from "redux-saga/effects";
import { setUser } from "../../ducks/user";
import { requestGetUser } from "../requests/users";

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    const data = response.data;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}
