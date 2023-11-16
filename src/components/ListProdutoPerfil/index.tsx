import { Container1 } from './styles'
import ProductPerfil from '../ProductPerfil'

import { CardapioItem } from '../../pages/Home'

type Props = {
  cardapio: CardapioItem[]
}

const ListProdutoPerfil = ({ cardapio }: Props) => {
  if (!cardapio) {
    return <h4>Carregando</h4>
  }
  return (
    <>
      <Container1>
        <>
          {cardapio.map((prato) => (
            <li key={prato.id}>
              <ProductPerfil
                nome={prato.nome}
                preco={prato.preco}
                porcao={prato.porcao}
                descricao={prato.descricao}
                foto={prato.foto}
                id={prato.id}
              />
            </li>
          ))}
        </>
      </Container1>
    </>
  )
}
export default ListProdutoPerfil
