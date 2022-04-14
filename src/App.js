import './App.css';
import React, { useContext, useState } from 'react';
import { AppContext } from './contexts/AppContext';
import { Div } from './components/Div';

function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

export default App;
