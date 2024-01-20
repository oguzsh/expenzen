import AppRouter from 'AppRouter';
import { GraphqlProvider } from 'GraphqlProvider';
import { BrowserRouter } from 'react-router-dom';

import React from 'react';

const App = () => {
  return (
    <React.StrictMode>
      <GraphqlProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </GraphqlProvider>
    </React.StrictMode>
  );
};

export default App;
