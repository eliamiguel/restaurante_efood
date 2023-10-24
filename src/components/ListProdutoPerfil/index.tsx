import { Container1, Div, P1, P2 } from './styles'
import ProductPerfil from '../ProductPerfil'
import fundo2 from '../../Assets/perfil/imagemFundo.png'
import { Gastronomia } from '../../pages/Home'

export type Props = {
  gastronomia: Gastronomia[]
  header?: Gastronomia
}
const ListProdutoPerfil = ({ gastronomia }: Props) => (
  <>
    <Div style={{ backgroundImage: `url(${fundo2})` }}>
      <P1>Italiana</P1>
      <P2>La Dolce Vita Trattoria</P2>
    </Div>
    <Container1>
      {gastronomia.map((prat) => (
        <ProductPerfil
          key={prat.cardapio.id}
          nome={prat.cardapio.nome}
          preco={prat.cardapio.preco}
          porcao={prat.cardapio.porcao}
          descricao={prat.cardapio.descricao}
          foto={prat.cardapio.foto}
        />
      ))}
    </Container1>
  </>
)
export default ListProdutoPerfil
