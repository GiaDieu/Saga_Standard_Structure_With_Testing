import { IMAGES, STATS } from '../constants/';

const loadImages = () => {
  return {
    type: IMAGES.LOAD,
  };
};

const setImages = (images) => {
  return {
    type: IMAGES.LOAD_SUCCESS,
    images,
  };
};

const setError = (error) => {
  return {
    type: IMAGES.LOAD_FAIL,
    error,
  };
};

const loadImageStats = (id) => {
  return {
    type: STATS.LOAD,
    id,
  };
};

const setImageStats = (id, downloads) => {
  return {
    type: STATS.LOAD_SUCCESS,
    id,
    downloads,
  };
};

const setImageStatsError = (id) => {
  return {
    type: STATS.LOAD_FAIL,
    id,
  };
};

export {
  loadImages,
  setImages,
  setError,
  loadImageStats,
  setImageStats,
  setImageStatsError,
};
