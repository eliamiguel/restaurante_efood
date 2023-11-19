/* eslint-disable react/jsx-key */

import Product from '../Product'
import { Container } from './styles'
import { useGetRestauranteListQuery } from '../../services/api'

const ListProducts = () => {
  const { data, isLoading } = useGetRestauranteListQuery()
  if (isLoading) {
    return <h2>Carregando...</h2>
  }
  return (
    <>
      <Container>
        {data &&
          data.map((prat) => (
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
