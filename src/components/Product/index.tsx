import Button from '../../Buttom'
import estrela from '../../Assets/estrela.png'
import {
  Container,
  Destaque,
  Paragrafo,
  ParagrafoTag,
  SemDestaque,
  Title
} from './styles'

export type Props = {
  title: string
  descricao: string
  image: string
  numeroEstrela?: number
  pais?: string
  destacado: boolean
}

const Product = ({
  title,
  descricao,
  image,
  numeroEstrela,
  destacado,
  pais
}: Props) => (
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
    <Paragrafo>{descricao}</Paragrafo>

    <Button title="Clique aqui para saber mais" type="link" to="/Perfil">
      Saiba mais
    </Button>
  </Container>
)

export default Product
