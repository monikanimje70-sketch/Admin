import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import './assets/css/bootstrap.min.css'
import './assets/vendors/bootstrap-icons/bootstrap-icons.css'
import './assets/js/bootstrap.bundle.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
