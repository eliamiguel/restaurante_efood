/* eslint-disable react/jsx-key */

import Product from '../Product'
import Pratos from '../models/Pratos'
import { Container } from './styles'

export type Props = {
  pratos: Pratos[]
}

const ListProducts = ({ pratos }: Props) => (
  <>
    <Container>
      {pratos.map((prat) => (
        <Product
          key={prat.id}
          title={prat.title}
          descricao={prat.descricao}
          button={prat.button}
          image={prat.image}
          estrela={prat.estrela}
          numeroEstrela={prat.numeroEstrela}
          pais={prat.pais}
          destaque={prat.destaque}
        />
      ))}
    </Container>
  </>
)
export default ListProducts
