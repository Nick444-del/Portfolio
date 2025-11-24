import Public from './pages/Public'
import Admin from './pages/Admin'
import Skills from './pages/Admin Pages/Skills'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import AdminRoutes from './routes/AdminRoutes'
import SkillsCategories from './pages/Admin Pages/SkillsCategories'

function App() {

  return (
    <>
      <Routes>
        <Route path="/portfolio" element={<Public />} />
        <Route path='/portfolio/admin' element={<AdminRoutes />}>
          <Route index element={<Admin />} />
          <Route path='/portfolio/admin/skills' element={<Skills/>} />
          <Route path='/portfolio/admin/skillscategories' element={<SkillsCategories/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
