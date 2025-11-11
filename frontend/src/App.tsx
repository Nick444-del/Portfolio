import Public from './pages/Public'
// import Admin from './pages/Admin'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/portfolio" element={<Public />} />
        {/* <Route path="/portfolio/admin" element={<Admin />} >
        </Route> */}
      </Routes>
    </>
  )
}

export default App
