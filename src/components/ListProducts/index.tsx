/* eslint-disable react/jsx-key */

import Product from '../Product'
import { Container } from './styles'
import { Restaurante } from '../../pages/Home'

export type Props = {
  restaurante: Restaurante[]
}

const ListProducts = ({ restaurante }: Props) => {
  if (!restaurante) {
    return <h2>Carregando...</h2>
  }
  return (
    <>
      <Container>
        {restaurante.map((prat) => (
          <li key={prat.id}>
            <Product
              title={prat.title}
              descricao={prat.descricao}
              image={prat.capa}
              numeroEstrela={prat.avaliacao}
              pais={prat.tipo}
              destacado={prat.destacado}
            />
          </li>
        ))}
      </Container>
    </>
  )
}
export default ListProducts
