import Button from '../../Buttom/index'
import estrela from '../../Assets/estrela.png'

import {
  Container,
  Destaque,
  Paragrafo,
  ParagrafoTag,
  SemDestaque,
  Title
} from './styles'
import { getDescripion } from '../../utils'

export type Props = {
  title: string
  descricao: string
  image: string
  numeroEstrela?: number
  pais?: string
  id: number
  destacado: boolean
}

const Product = ({
  title,
  descricao,
  image,
  numeroEstrela,
  destacado,
  pais,
  id
}: Props) => {
  return (
    <>
      <Container>
        <img src={image} alt="Sushi" />
        <ParagrafoTag>{pais}</ParagrafoTag>
        {destacado === true ? (
          <Destaque>Destaque da semanna</Destaque>
        ) : (
          <SemDestaque></SemDestaque>
        )}
        <div>
          <Title>{title}</Title>
          <Title>
            <span>{numeroEstrela}</span>
            <img src={estrela} alt="estrela" />
          </Title>
        </div>
        <Paragrafo>{getDescripion(descricao)}</Paragrafo>

        <Button
          title="Clique aqui para saber mais"
          type="link"
          to="/Perfil/:id"
        >
          Saiba mais
        </Button>
      </Container>
    </>
  )
}

export default Product
