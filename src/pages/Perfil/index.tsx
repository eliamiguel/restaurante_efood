import Pratos from '../../components/models/Pratos'
import fundo1 from '../../Assets/perfil/fundo1.png'
import dolce from '../../Assets/perfil/image 3.png'
import HeaderPerfil from '../../components/HeaderPerfil'
import ListProdutoPerfil from '../../components/ListProdutoPerfil'

const Prato: Pratos[] = [
  {
    title: 'La Dolce Vita Trattoria ',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: dolce,
    button: 'Adicionar no carrinho',
    id: 1
  },
  {
    title: 'La Dolce Vita Trattoria ',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: dolce,
    button: 'Adicionar no carrinho',
    id: 2
  },
  {
    title: 'La Dolce Vita Trattoria ',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: dolce,
    button: 'Adicionar no carrinho',
    id: 3
  },
  {
    title: 'La Dolce Vita Trattoria ',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: dolce,
    button: 'Adicionar no carrinho',
    id: 4
  },
  {
    title: 'La Dolce Vita Trattoria ',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: dolce,
    button: 'Adicionar no carrinho',
    id: 5
  },
  {
    title: 'La Dolce Vita Trattoria ',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: dolce,
    button: 'Adicionar no carrinho',
    id: 6
  }
]

const Perfil = () => (
  <>
    <HeaderPerfil
      style={{ background: `url(${fundo1})` }}
      restaura={'Restaurante'}
      carrinho={'0 - carrinho'}
    />
    <ListProdutoPerfil pratos={Prato} />
  </>
)

export default Perfil
