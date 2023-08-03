import AppRouter from 'AppRouter';
import { BrowserRouter } from 'react-router-dom';

import React from 'react';

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
