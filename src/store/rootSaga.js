import { take, put } from "../redux-saga/effects";
import * as ActionTypes from './actionTypes'

export default function* rootSaga() {
  for (let i = 0; i < 3; i++) {
    console.log('waiting ' + ActionTypes.ASYNC_ADD)
    yield take(ActionTypes.ASYNC_ADD)
    console.log('done')
    yield put({type: ActionTypes.ADD})
  }
}
