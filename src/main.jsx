import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import App from './components/layout/App'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Portfolio">
    <App />
  </BrowserRouter>,
);