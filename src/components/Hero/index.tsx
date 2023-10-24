import { Gastronomia } from '../../pages/Home'

import HeaderPerfil from '../HeaderPerfil'
import { Div, P1, P2 } from '../ListProdutoPerfil/styles'

type Props = {
  gastronomia: Gastronomia
}

const Hero = ({ gastronomia }: Props) => (
  <>
    <HeaderPerfil
      style={{ background: `url(${gastronomia.capa})` }}
      restaura={'Restaurantes'}
      carrinho={'0 - carrinho'}
    />

    <Div style={{ backgroundImage: `url(${gastronomia.capa})` }}>
      <P1>{gastronomia.tipo}</P1>
      <P2>{gastronomia.titulo}</P2>
    </Div>
  </>
)

export default Hero
