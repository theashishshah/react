import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormWithHook from './components/FormWithHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormWithHook />
  </StrictMode>,
)
