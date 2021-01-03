import { IMAGES } from '../constants';
import { takeEvery, select, call, put } from 'redux-saga/effects';
import { fetchImages } from '../api';
import { setError, setImages } from '../actions';

export const getPage = (state) => state.nextPage;

//worker saga
export function* handleImagesLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);

    //dispatch images
    yield put(setImages(images));
  } catch (error) {
    //dispatch error action
    yield put(setError(error.toString()));
  }
}

//watcher saga
export default function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
