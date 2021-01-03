import { combineReducers } from 'redux';

import loadingReducers from './loadingReducers';
import imagesReducers from './imagesReducers';
import errorReducers from './errorReducers';
import pageReducers from './pageReducers';
import statsReducer from './statsReducer';

const rootReducer = combineReducers({
  isLoading: loadingReducers,
  Images: imagesReducers,
  error: errorReducers,
  nextPage: pageReducers,
  imageStats: statsReducer,
});

export default rootReducer;
