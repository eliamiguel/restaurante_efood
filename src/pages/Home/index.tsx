import ListProducts from '../../components/ListProducts'
import fundo from '../../Assets/fundo.svg'
import Header from '../../components/Header'

export type CardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  image: string
  title: string
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio?: CardapioItem[]
}
const Home = () => {
  return (
    <>
      <Header
        style={{ background: `url(${fundo})` }}
        paragrafo={'Viva experiências gastronômicas no conforto da sua casa'}
      />
      <ListProducts />
    </>
  )
}

export default Home
