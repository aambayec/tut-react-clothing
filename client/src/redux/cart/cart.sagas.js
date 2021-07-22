import { takeLatest, put, all, call } from "@redux-saga/core/effects";

import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
