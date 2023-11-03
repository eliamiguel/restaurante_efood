import { useEffect, useState } from 'react'

import ListProducts from '../../components/ListProducts'
import fundo from '../../Assets/fundo.svg'
import Header from '../../components/Header'

export type CardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  image: string
  title: string
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}
const Home = () => {
  const [restaurante, seRestaurante] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => seRestaurante(res))
  }, [])
  return (
    <>
      <Header
        style={{ background: `url(${fundo})` }}
        paragrafo={'Viva experiências gastronômicas no conforto da sua casa'}
      />
      <ListProducts restaurante={restaurante} />
    </>
  )
}

export default Home
