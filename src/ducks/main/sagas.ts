import { takeLatest, put } from "redux-saga/effects";
import { AnyAction } from "redux";
import {
  GET_DATA_REQUESTED,
  GET_DATA_SUCCEEDED,
  GET_DATA_FAILED,
} from "./reducer";

export function* getDataSaga(action: AnyAction) {
  try {
    const res = yield fetch(action.payload);
    const data = yield res.json();
    yield put(GET_DATA_SUCCEEDED(data));
  } catch (e) {
    yield put(GET_DATA_FAILED(e));
  }
}

export function* DataSaga() {
  yield takeLatest(GET_DATA_REQUESTED, getDataSaga);
}
