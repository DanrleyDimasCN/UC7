import React from 'react';
import './App.css';
import Rotas from './Routes';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div>
      <Rotas/>
      <ToastContainer autoClose={5000} />
    </div>
  );
}

export default App;