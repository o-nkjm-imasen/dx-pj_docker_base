import { fork } from 'redux-saga/effects';


/* config for catch redux-sagas */
function* mySaga() {
}

export default function* rootSaga() {
  yield fork(mySaga);
}
