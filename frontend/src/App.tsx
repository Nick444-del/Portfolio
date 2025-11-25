import Public from './pages/Public'
import Admin from './pages/Admin'
import Skills from './pages/Admin Pages/Skills'
import { Routes, Route } from 'react-router-dom'
import AdminRoutes from './routes/AdminRoutes'
import SkillsCategories from './pages/Admin Pages/SkillsCategories'
import AdminLogin from './pages/Admin Pages/AdminLogin'
import './App.css'

function App() {

  return (
    <>
      <Routes>

        <Route path="/portfolio" element={<Public />} />

        <Route path='/portfolio/admin/login' element={<AdminLogin/>} />

        <Route path='/portfolio/admin' element={<AdminRoutes />}>
          <Route index element={<Admin />} />
          <Route path='skills' element={<Skills/>} />
          <Route path='skillscategories' element={<SkillsCategories/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
