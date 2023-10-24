import Button from '../../Buttom'
import { Link } from 'react-router-dom'
import { Container, Paragrafo, Title } from './styles'
type Props = {
  nome: string
  descricao: string
  foto: string
  porcao?: string
  preco?: number
}

const ProductPeril = ({ nome, descricao, foto }: Props) => (
  <Container>
    <img src={foto} alt="Sushi" />

    <div>
      <Title>{nome}</Title>
    </div>
    <Paragrafo>{descricao}</Paragrafo>

    <Button title="Adicionar no carrinho" type="button" to="/Prats/1">
      Adicionar ao carrinho
    </Button>
  </Container>
)

export default ProductPeril
