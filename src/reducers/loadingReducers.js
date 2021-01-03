import { IMAGES } from '../constants';

const loadingReducers = (state = false, action) => {
  switch (action.type) {
    case IMAGES.LOAD:
      state = true;
      return state;
    case IMAGES.LOAD_SUCCESS:
      state = false;
      return state;
    case IMAGES.LOAD_FAIL:
      state = false;
      return state;
    default:
      return state;
  }
};

export default loadingReducers;
