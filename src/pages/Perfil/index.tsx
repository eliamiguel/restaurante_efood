import { useEffect, useState } from 'react'

import fundo1 from '../../Assets/perfil/fundo1.png'
import fundo2 from '../../Assets/perfil/imagemFundo.png'

import ListProdutoPerfil from '../../components/ListProdutoPerfil'
import { CardapioItem } from '../Home'
import { useParams } from 'react-router-dom'
import Banner from '../../components/HeaderPerfil/Banner'
import { HeaderPerfil } from '../../components/HeaderPerfil'

const Perfil = () => {
  const { id } = useParams()
  const [cardapio, setCardapio] = useState<CardapioItem[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
      .then((res) => res.json())
      .then((res) => setCardapio(res[id ? id : '']))
  }, [id])

  if (!cardapio) {
    return <h2>Carregando</h2>
  }

  return (
    <>
      <HeaderPerfil
        style={{ background: `url(${fundo1})` }}
        restaura={'Restaurantes'}
        carrinho={'0 - carrinho'}
      />
      <Banner
        title={'Italiano'}
        text={'Bella Tavola Italiana'}
        image={fundo2}
      />

      <ListProdutoPerfil cardapio={cardapio} />
    </>
  )
}

export default Perfil
