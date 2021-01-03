import { getPage, handleImagesLoad } from '../imagesSaga';
import { setImages, setError } from '../../actions';
import { runSaga } from 'redux-saga';
import * as api from '../../api';

test('Selector gives back the page', () => {
  const nextPage = 1;
  const state = { nextPage };
  const res = getPage(state);
  expect(res).toBe(nextPage);
});

test('Should load the images', async () => {
  // we push all dispatched actions to make assertions easier
  // and our tests less brittle
  const dispatchedActions = [];

  // we don't want to perform an actual api call in our tests
  // so we will mock the fetchImages api with jest
  // this will mutate the dependency which we may reset if other tests
  // are dependent on it
  const mockedImages = ['Url Test 1', 'Url Test 2'];
  api.fetchImages = jest.fn(() => Promise.resolve(mockedImages));

  const fakeStore = {
    getState: () => ({ nextPage: 1 }),
    dispatch: (action) => dispatchedActions.push(action),
  };

  // wait for saga to complete
  await runSaga(fakeStore, handleImagesLoad).toPromise();
  expect(api.fetchImages.mock.calls.length).toBe(1);
  expect(dispatchedActions).toContainEqual(setImages(mockedImages));
});

test('Should handles ERROR', async () => {
  const dispatchedActions = [];

  // we simulate an error by rejecting the promise
  // then we assert if our saga dispatched the action(s) correctly
  const error = 'API Server is down';
  api.fetchImages = jest.fn(() => Promise.reject(error));

  const fakeStore = {
    getState: () => ({ nextPage: 1 }),
    dispatch: (action) => dispatchedActions.push(action),
  };

  await runSaga(fakeStore, handleImagesLoad).toPromise();
  expect(api.fetchImages.mock.calls.length).toBe(1);
  expect(dispatchedActions).toContainEqual(setError(error));
});
