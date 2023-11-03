import { Container1 } from './styles'
import ProductPerfil from '../ProductPerfil'

import { Restaurante } from '../../pages/Home'

type Props = {
  restaurante: Restaurante[]
}

const ListProdutoPerfil = ({ restaurante }: Props) => {
  return (
    <Container1>
      {restaurante.map((prat) => (
        <li key={prat.cardapio.id}>
          <ProductPerfil
            nome={prat.cardapio.nome}
            preco={prat.cardapio.preco}
            porcao={prat.cardapio.porcao}
            descricao={prat.cardapio.descricao}
            foto={prat.cardapio.foto}
          />
        </li>
      ))}
    </Container1>
  )
}
export default ListProdutoPerfil
