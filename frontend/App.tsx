import AppRouter from 'AppRouter';
import React from 'react';

import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
