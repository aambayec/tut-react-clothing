import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  // all and call makes initialization of sagas all at once on separate task streams
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
