import { useEffect, useState } from 'react'

import fundo1 from '../../Assets/perfil/fundo1.png'
import HeaderPerfil from '../../components/HeaderPerfil'
import ListProdutoPerfil from '../../components/ListProdutoPerfil'
import { Gastronomia } from '../Home'

const Perfil = () => {
  const [gastronomia, setGastronomia] = useState<Gastronomia[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setGastronomia(res))
  }, [])

  return (
    <>
      <HeaderPerfil
        style={{ background: `url(${fundo1})` }}
        restaura={'Restaurantes'}
        carrinho={'0 - carrinho'}
      />
      <ListProdutoPerfil gastronomia={gastronomia} />
    </>
  )
}

export default Perfil
