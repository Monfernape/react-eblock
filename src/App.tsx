import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Logger from './services/Logger'
import Routing from './Routing';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Logger>
        <Routing />
      </Logger>
    </Provider>
  );
}

export default App;
