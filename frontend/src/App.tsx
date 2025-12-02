import Public from './pages/Public'
import Admin from './pages/Admin'
import Skills from './pages/Admin Pages/Skills'
import { Routes, Route, Navigate } from 'react-router-dom'
import AdminRoutes from './routes/AdminRoutes'
import AdminPortfolio from './pages/Admin Pages/AdminPortfolio'
import SkillsCategories from './pages/Admin Pages/SkillsCategories'
import AdminLogin from './pages/Admin Pages/AdminLogin'
import './App.css'

function App() {

  return (
    <>
      <Routes>

        {/* Default route */}
        <Route path="/" element={<Navigate to="/portfolio" />} />

        <Route path='/admin' element={<Navigate to="/portfolio/admin" />} />

        {/* Public site */}
        <Route path="/portfolio" element={<Public />} />

        {/* Admin Routes */}
        <Route path='/portfolio/admin/login' element={<AdminLogin/>} />

        <Route path='/portfolio/admin' element={<AdminRoutes />}>
          <Route index element={<Admin />} />
          <Route path='skills' element={<Skills/>} />
          <Route path='skillscategories' element={<SkillsCategories/>} />
          <Route path='portfolios' element={<AdminPortfolio/>} />
        </Route>

        {/* Catch-all fallback */}
        <Route path="*" element={<Navigate to="/portfolio" />} />

      </Routes>
    </>
  )
}

export default App
