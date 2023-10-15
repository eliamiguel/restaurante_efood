import ListProducts from '../../components/ListProducts'
import Pratos from '../../components/models/Pratos'
import Sushi from '../../Assets/Sushi.png'
import fundo from '../../Assets/fundo.svg'
import estrela from '../../Assets/estrela.png'
import image1 from '../../Assets/image 1.png'
import Header from '../../components/Header'

const Prato: Pratos[] = [
  {
    title: 'Hioki Sushi ',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: Sushi,
    button: 'Saiba mais',
    destaque: 'Destaque da semana',
    numeroEstrela: 4.9,
    estrela: estrela,
    pais: 'Japonesa',
    id: 1
  },
  {
    title: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: image1,
    button: 'Saiba mais',
    numeroEstrela: 0,
    estrela: estrela,
    pais: 'Italiana',
    id: 2
  },
  {
    title: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: image1,
    button: 'Saiba mais',
    numeroEstrela: 0,
    estrela: estrela,
    pais: 'Italiana',
    id: 3
  },
  {
    title: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: image1,
    button: 'Saiba mais',
    numeroEstrela: 0,
    estrela: estrela,
    pais: 'Italiana',
    id: 4
  },
  {
    title: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: image1,
    button: 'Saiba mais',
    numeroEstrela: 4.9,
    estrela: estrela,
    pais: 'Italiana',
    id: 5
  },
  {
    title: 'La Dolce Vita Trattoria',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: image1,
    button: 'Saiba mais',
    numeroEstrela: 0,
    estrela: estrela,
    pais: 'Italiana',
    id: 6
  }
]

const Home = () => (
  <>
    <Header
      style={{ background: `url(${fundo})` }}
      paragrafo={'Viva experiências gastronômicas no conforto da sua casa'}
    />
    <ListProducts pratos={Prato} />
  </>
)

export default Home
