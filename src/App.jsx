import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Inicio from './pages/Inicio'
import Datos from './pages/Datos'
import Estudios from './pages/Estudios'
import Experiencia from './pages/Experiencia'
import Referencias from './pages/Referencias'
import Documentos from './pages/Documentos'
import Soportes from './pages/Soportes'
import Contacto from './pages/Contacto'
import Login from './pages/admin/Login'
import AdminExperiencias from './pages/admin/AdminExperiencias'
import ProtectedRoute from './components/ProtectedRoute'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"             element={<Welcome />} />
        <Route path="/inicio"       element={<Inicio />} />
        <Route path="/datos"        element={<Datos />} />
        <Route path="/estudios"     element={<Estudios />} />
        <Route path="/experiencia"  element={<Experiencia />} />
        <Route path="/referencias"  element={<Referencias />} />
        <Route path="/documentos"   element={<Documentos />} />
        <Route path="/soportes"     element={<Soportes />} />
        <Route path="/contacto"     element={<Contacto />} />
        <Route path="/admin/login"  element={<Login />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminExperiencias />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
