import { IMAGES } from '../constants';

const imagesReducers = (state = [], action) => {
  switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
      return [...state, ...action.images];

    default:
      return state;
  }
};

export default imagesReducers;
