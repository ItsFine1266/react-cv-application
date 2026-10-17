import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/main.css"
import "./styles/EditPanel.css"

import EditPanel from './components/EditPanel'
import PreviewPanel from './components/PreviewPanel'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container">
      <EditPanel></EditPanel>
      <PreviewPanel></PreviewPanel>
    </div>
  </StrictMode>
)
