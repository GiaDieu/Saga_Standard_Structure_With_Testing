import React from 'react';
import { Provider } from 'react-redux';
import ImagesGrid from './components/ImageGrid/ImagesGrid';
import configStore from './store';

const store = configStore();

const App = () => {
  return (
    <Provider store={store}>
      <ImagesGrid />
    </Provider>
  );
};

export default App;
