import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './App.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './routes/Router.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  </StrictMode>,
)
