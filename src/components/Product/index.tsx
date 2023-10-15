import Button from '../../Buttom'
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
  button: string
  image: string
  estrela?: string
  numeroEstrela?: number
  pais?: string
  destaque?: string
}

const Product = ({
  title,
  descricao,
  image,
  button,
  numeroEstrela,
  estrela,
  destaque,
  pais
}: Props) => (
  <Container>
    <img src={image} alt="Sushi" />
    <ParagrafoTag>{pais}</ParagrafoTag>
    {destaque === 'Destaque da semana' ? (
      <Destaque>{destaque}</Destaque>
    ) : (
      <SemDestaque></SemDestaque>
    )}
    <div>
      <Title>{title}</Title>
      <Title>
        {numeroEstrela === 4.9 ? <span>{numeroEstrela}</span> : 4.6}{' '}
        <img src={estrela} alt="estrela" />
      </Title>
    </div>
    <Paragrafo>{descricao}</Paragrafo>

    <Button title="Clique aqui para saber mais" type="link" to="/Perfil">
      {button}
    </Button>
  </Container>
)

export default Product
