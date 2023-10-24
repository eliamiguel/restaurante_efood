import ProductGastronomia from '..'

import Pratos from '../../models/Pratos'
import { Container } from './styles'

export type Props = {
  pratos: Pratos[]
}

const ListProducts = ({ pratos }: Props) => {
  return (
    <>
      <Container>
        {pratos.map((prat) => (
          <li key={prat.id}>
            <ProductGastronomia
              title={prat.title}
              descricao={prat.descricao}
              image={prat.image}
              pais={prat.pais}
              button={prat.button}
            />
          </li>
        ))}
      </Container>
    </>
  )
}
export default ListProducts
