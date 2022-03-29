import { all } from "redux-saga/effects";
import { DataSaga } from "../ducks/main/sagas";
import { DetailsSaga } from "../ducks/details/sagas";
import { uniqueUnitSaga } from "../ducks/uniqueUnit/sagas";
import { uniqueTechSaga } from "../ducks/uniqueTech/sagas";

export default function* rootSaga() {
  yield all([DataSaga(), DetailsSaga(), uniqueUnitSaga(), uniqueTechSaga()]);
}
