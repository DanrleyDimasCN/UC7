import React from 'react';
import './App.css';
import Rotas from './Routes';
import { ToastContainer } from 'react-toastify'
import AuthProvider from './Contexts/authContexts';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
      <div className='div-app-main'>
        <Rotas/>
        <ToastContainer autoClose={5000} />
      </div>
    </AuthProvider>
  );
}

export default App;