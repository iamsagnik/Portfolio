import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import {Bridge, Layout, Home, Error} from './components'
import App from './App'
import './index.css'

const getBasename = () => {
  // For GitHub Pages deployment
  if (window.location.host.includes('github.io')) {
    return '/Portfolio';
  }
  // For local development
  return '/';
};

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index  element={<App />} />
      <Route path='bridge' element={<Bridge />} />
      <Route path='home' element={<Home />} />
      <Route path='error' element={<Error />} />
    </Route>
  ),
  {
    basename: getBasename()
  }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
