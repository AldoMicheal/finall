// src/main.jsx (CORRECTED)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
// 🚨 CRITICAL FIX: Add the import for your main application CSS 🚨
import './styles/main.css' 
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)