import react from 'react'
import ReactDom from 'react-dom/client'
import Home from './pages/Home' 
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import myGlobalStyles from './styles/GlobalStyles'



ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>
)
