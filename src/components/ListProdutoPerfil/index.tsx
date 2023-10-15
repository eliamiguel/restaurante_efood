import { Container1, Div, P1, P2 } from './styles'
import ProductPerfil from '../ProductPerfil'
import Pratos from '../models/Pratos'
import fundo2 from '../../Assets/perfil/imagemFundo.png'

export type Props = {
  pratos: Pratos[]
}
const ListProdutoPerfil = ({ pratos }: Props) => (
  <>
    <Div style={{ backgroundImage: `url(${fundo2})` }}>
      <P1>Italiana</P1>
      <P2>La Dolce Vita Trattoria</P2>
    </Div>
    <Container1>
      {pratos.map((prat) => (
        <ProductPerfil
          key={prat.id}
          title={prat.title}
          descricao={prat.descricao}
          button={prat.button}
          image={prat.image}
        />
      ))}
    </Container1>
  </>
)
export default ListProdutoPerfil
