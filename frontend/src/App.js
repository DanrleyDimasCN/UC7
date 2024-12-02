import React from 'react';
import './App.css';
import Rotas from './Routes';
import { ToastContainer } from 'react-toastify'
import AuthProvider from './Contexts/authContexts';

function App() {
  return (
    <AuthProvider>
      <div>
        <Rotas/>
        <ToastContainer autoClose={5000} />
      </div>
    </AuthProvider>
  );
}

export default App;