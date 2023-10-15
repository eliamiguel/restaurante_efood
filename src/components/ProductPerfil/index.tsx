import Button from '../../Buttom'
import { Container, Paragrafo, Title } from './styles'
type Props = {
  title: string
  descricao: string
  button: string
  image: string
  pais?: string
  destaque?: string
}

const ProductPeril = ({ title, descricao, image, button }: Props) => (
  <Container>
    <img src={image} alt="Sushi" />

    <div>
      <Title>{title}</Title>
    </div>
    <Paragrafo>{descricao}</Paragrafo>

    <Button title="Adicionar no carrinho" type="button" to="/Perfil">
      {button}
    </Button>
  </Container>
)

export default ProductPeril
