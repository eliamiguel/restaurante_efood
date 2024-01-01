/* eslint-disable @typescript-eslint/no-non-null-assertion */

import fundo1 from '../../Assets/perfil/fundo1.png'
import fundo2 from '../../Assets/perfil/imagemFundo.png'

import { useParams } from 'react-router-dom'
import Banner from '../../components/HeaderPerfil/Banner'
import { HeaderPerfil } from '../../components/HeaderPerfil'

import { useGetRestauranteCardapioQuery } from '../../services/api'
import ListProdutoPerfil from '../../components/ListProdutoPerfil'
import { CardItem } from '../../components/Cart/styles'

const Perfil = () => {
  const { id } = useParams()

  const { data: cardapio } = useGetRestauranteCardapioQuery(id!)

  if (!cardapio) {
    return <h2>Carregando...</h2>
  }
  return (
    <>
      <HeaderPerfil
        style={{ background: `url(${fundo1})` }}
        restaura={'Restaurantes'}
        carrinho={'0 - carrinho'}
      />
      <Banner
        title={cardapio.tipo}
        text={cardapio.titulo}
        image={cardapio.capa}
      />
      <ListProdutoPerfil restaurante={cardapio} />
    </>
  )
}

export default Perfil
