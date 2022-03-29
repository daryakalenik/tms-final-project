import { takeLatest, put } from "redux-saga/effects";
import { AnyAction } from "redux";
import {
  GET_DETAILS_REQUESTED,
  GET_DETAILS_SUCCEEDED,
  GET_DETAILS_FAILED,
} from "./reducer";

export function* getDetailsSaga(action: AnyAction) {
  try {
    const res = yield fetch(action.payload);
    const data = yield res.json();
    yield put(GET_DETAILS_SUCCEEDED(data));
  } catch (e) {
    yield put(GET_DETAILS_FAILED(e));
  }
}

export function* DetailsSaga() {
  yield takeLatest(GET_DETAILS_REQUESTED, getDetailsSaga);
}
