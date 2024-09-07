import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RicknMortyApp } from './components/RicknMortyApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RicknMortyApp />
  </StrictMode>,
)
