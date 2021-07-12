import './App.css'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import Routes from './pages/Routes'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes />
      </div>
    </BrowserRouter>
  )
}
