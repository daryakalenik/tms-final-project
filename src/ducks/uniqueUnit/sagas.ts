import { takeLatest, put } from "redux-saga/effects";
import { AnyAction } from "redux";
import {
  GET_UNIQUE_UNIT_REQUESTED,
  GET_UNIQUE_UNIT_SUCCEEDED,
  GET_UNIQUE_UNIT_FAILED,
} from "./reducer";

export function* getUniqueUnitSaga(action: AnyAction) {
  try {
    const res = yield fetch(action.payload);
    const data = yield res.json();
    yield put(GET_UNIQUE_UNIT_SUCCEEDED(data));
  } catch (e) {
    yield put(GET_UNIQUE_UNIT_FAILED(e));
  }
}

export function* uniqueUnitSaga() {
  yield takeLatest(GET_UNIQUE_UNIT_REQUESTED, getUniqueUnitSaga);
}
