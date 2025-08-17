import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Order from './components/Order.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Order />
  </StrictMode>,
)
