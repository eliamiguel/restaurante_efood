import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Prats from './pages/Pratos'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Perfil" element={<Perfil />} />
    <Route path="/Prats/1" element={<Prats />} />
  </Routes>
)

export default Rotas
