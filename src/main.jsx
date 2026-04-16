import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './routes/Routes.jsx'
import { RouterProvider } from 'react-router'
import Provider from './context/provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />,
    </Provider>
  </StrictMode>,
)
