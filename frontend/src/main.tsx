import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { SkillProvider } from './context/SkillsContext.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <Router>
    <StrictMode>
      <SkillProvider>
        <App />
      </SkillProvider>
    </StrictMode>
  </Router>,
)
