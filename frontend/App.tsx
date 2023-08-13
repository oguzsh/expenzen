import React from 'react';
import AppRouter from 'AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { GraphqlProvider } from 'GraphqlProvider';
import { NextUIProvider } from '@nextui-org/react';

const App = () => {
  return (
    <React.StrictMode>
      <GraphqlProvider>
        <BrowserRouter>
          <NextUIProvider>
            <AppRouter />
          </NextUIProvider>
        </BrowserRouter>
      </GraphqlProvider>
    </React.StrictMode>
  );
};

export default App;
