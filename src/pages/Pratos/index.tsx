import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'

import { useParams } from 'react-router-dom'

import { Gastronomia } from '../Home'
import ListGastro from '../../components/ProductGastronomia/ListGastro'
import Pratoes from '../../components/models/Pratos'
import dolce from '../../Assets/perfil/image 3.png'
const Prato: Pratoes[] = [
  {
    title: 'La Dolce Vita Trattoria ',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: dolce,
    button: 'Mais detralhes',
    id: 1
  },
  {
    title: 'La Dolce Vita Trattoria ',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: dolce,
    button: 'Mais detralhes',
    id: 2
  },
  {
    title: 'La Dolce Vita Trattoria ',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: dolce,
    button: 'Mais detralhes',
    id: 3
  },
  {
    title: 'La Dolce Vita Trattoria ',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: dolce,
    button: 'Mais detralhes',
    id: 4
  },
  {
    title: 'La Dolce Vita Trattoria ',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: dolce,
    button: 'Mais detralhes',
    id: 5
  },
  {
    title: 'La Dolce Vita Trattoria ',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: dolce,
    button: 'Mais detralhes',
    id: 6
  }
]
const Prats = () => {
  const { id } = useParams()
  const [abrirFechar, setAbrirFechar] = useState(false)
  const [gastronomia, setGastronomia] = useState<Gastronomia>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
      .then((res) => res.json())
      .then((res) => setGastronomia(res))
  }, [])
  if (!gastronomia) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <Hero gastronomia={gastronomia} />
      <ListGastro pratos={Prato} />
    </>
  )
}

export default Prats
