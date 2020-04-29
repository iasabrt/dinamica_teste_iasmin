import React from 'react';
import AppRoute from './routes/AppRoute';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

function App() {
  return (
      <Provider store={store}>
        <AppRoute />
      </Provider>
  );
}

export default App;
