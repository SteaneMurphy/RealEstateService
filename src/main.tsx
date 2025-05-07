import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

/*
  This is the main entrypoint for the 'App' component. This component is rendered on the
  'root' element in the index.html script
*/

createRoot(document.getElementById('root')!).render(
  <App />
)
