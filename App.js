import React from 'react';
import { Provider } from 'react-redux';
import Home from './src';
import store from './src/redux/store/index';

function App() {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;