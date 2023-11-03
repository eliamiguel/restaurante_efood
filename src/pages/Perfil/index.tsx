import { useEffect, useState } from 'react'

import fundo1 from '../../Assets/perfil/fundo1.png'
import HeaderPerfil from '../../components/HeaderPerfil'
import ListProdutoPerfil from '../../components/ListProdutoPerfil'
import { Restaurante } from '../Home'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams()
  const [cardapio, setCardapio] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [])

  return (
    <>
      <HeaderPerfil
        style={{ background: `url(${fundo1})` }}
        restaura={'Restaurantes'}
        carrinho={'0 - carrinho'}
      />
      <ListProdutoPerfil restaurante={cardapio} />
    </>
  )
}

export default Perfil
