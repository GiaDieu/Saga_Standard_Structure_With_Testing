import { take, fork, put, call } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImageStats } from '../api';
import { loadImageStats, setImageStats, setImageStatsError } from '../actions';

function* handleStatsRequest(id) {
  try {
    //dispatch action
    yield put(loadImageStats(id));
    const res = yield call(fetchImageStats, id);
    yield put(setImageStats(id, res.downloads.total));
  } catch (error) {
    //dispatch
    yield put(setImageStatsError(id));
  }
}

export default function* watchStatsRequest() {
  while (true) {
    const { images } = yield take(IMAGES.LOAD_SUCCESS);
    //take it easy 'images' variable, it is in action with parameters 'images'

    for (let i = 0; i < images.length; i++) {
      yield fork(handleStatsRequest, images[i].id);
    }
  }
}
