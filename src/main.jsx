import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthoProvider from './Context/AuthoProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthoProvider>
      <App />
    </AuthoProvider>

  </StrictMode>,
)
