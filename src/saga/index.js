import { all } from 'redux-saga/effects';
import imagesSaga from './imagesSaga';
import statsSaga from './statsSaga';

function* rootSaga() {
  yield all([imagesSaga(), statsSaga()]);
}
//watcher saga -> actions -> worker saga
export default rootSaga;
