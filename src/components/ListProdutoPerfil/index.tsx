import { Container1 } from './styles'
import ProductPerfil from '../ProductPerfil'
import { Restaurante } from '../../pages/Home'

type Props = {
  restaurante: Restaurante
}

const ListProdutoPerfil = ({ restaurante }: Props) => {
  console.log(restaurante)
  if (!restaurante) {
    return <h4>Carregando</h4>
  }
  return (
    <>
      <Container1>
        <>
          {restaurante.cardapio &&
            restaurante.cardapio.map((prato) => (
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
