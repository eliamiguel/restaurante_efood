/* eslint-disable react/jsx-no-undef */
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Cart from './components/Cart'
import Form from './components/Formulario/index'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Perfil/:id" element={<Perfil />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  )
}
export default Rotas
