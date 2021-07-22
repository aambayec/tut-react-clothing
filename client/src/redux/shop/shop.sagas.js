import {
  // takeEvery,
  call,
  put,
  takeLatest,
  delay,
  all,
} from "redux-saga/effects";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.types";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

// function* is a js async generator function, works like async await.
// it stops the code on every 'yield' when called next()
function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();

    // call: is a method that takes a function as the 1st argument,
    // then the subsequent arguments will be the parameters that you passed in the first function
    // it creates an Effect that instructs the middleware to call the function
    // yield incase the method takes longer than we expect
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );

    // put is the saga way for dispatch, it invokes the redux actions
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

// SAMPLE CODE ONLY FOR FUTURE REFERENCE
function* sampleDebounce() {
  yield console.log("debounce triggered");
  yield delay(3000);

  // action object
  yield put({ type: "REDUCER_ACTION_TYPE_VALUE_HERE2" });
}

// SAMPLE CODE ONLY FOR FUTURE REFERENCE
export function* sampleDebounceSaga() {
  //reducer action type
  yield takeLatest("REDUCER_ACTION_TYPE_HERE1", sampleDebounce);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
