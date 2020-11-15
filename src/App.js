import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './pages/Routes';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
  );
}
