import React from 'react';
import AppRouter from 'AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { GraphqlProvider } from 'GraphqlProvider';

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
