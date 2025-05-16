import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './TodoApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
