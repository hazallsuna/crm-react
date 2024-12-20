import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomForm from './CustomForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomForm />
  </StrictMode>,
)
