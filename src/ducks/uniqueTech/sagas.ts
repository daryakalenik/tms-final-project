import { takeLatest, put } from "redux-saga/effects";
import { AnyAction } from "redux";
import {
  GET_UNIQUE_TECH_REQUESTED,
  GET_UNIQUE_TECH_SUCCEEDED,
  GET_UNIQUE_TECH_FAILED,
} from "./reducer";

export function* getUniqueTechSaga(action: AnyAction) {
  try {
    const res = yield fetch(action.payload);
    const data = yield res.json();
    yield put(GET_UNIQUE_TECH_SUCCEEDED(data));
  } catch (e) {
    yield put(GET_UNIQUE_TECH_FAILED(e));
  }
}

export function* uniqueTechSaga() {
  yield takeLatest(GET_UNIQUE_TECH_REQUESTED, getUniqueTechSaga);
}
