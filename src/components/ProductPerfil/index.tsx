import Button from '../../Buttom'
import { useState } from 'react'
import { Restaurante } from '../../pages/Home'

import {
  ContaineModal,
  Container,
  DivModal,
  Modal,
  Paragrafo,
  Title
} from './styles'

import fechar from '../../Assets/fechar.png'
import prato from '../../Assets/Sushi.png'
type Props = {
  nome: string
  descricao: string
  foto: string
  porcao?: string
  preco?: number
  restaurante?: Restaurante
}

const ProductPeril = ({ restaurante }: Props) => {
  const [abrirFechar, setAbrirFechar] = useState(false)
  return (
    <>
      <Container>
        <img src={restaurante?.cardapio.foto} alt="Sushi" />

        <div>
          <Title>{restaurante?.cardapio.nome}</Title>
        </div>
        <Paragrafo>{restaurante?.cardapio.descricao}</Paragrafo>
        <Button
          title="Mais detralhes"
          type="button"
          onClick={() => setAbrirFechar(true)}
        >
          Mais detralhes
        </Button>
      </Container>

      <ContaineModal className={abrirFechar ? 'visivel' : ''}>
        <Modal>
          <img src={prato} alt="imagem da gastronomia" />
          <DivModal>
            <h3>{'Titulo'}</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore fugiat exercitationem provident sed laudantium magni aut
              atque facilis, omnis rerum, impedit totam deserunt fuga vero quis
              pariatur adipisci, commodi voluptate! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Doloribus commodi ipsam natus quam
              aliquid quibusdam et voluptate maxime ipsum reprehenderit,
              necessitatibus fugit tempore nesciunt, expedita quidem numquam
              eius impedit iure.
              <br />
              <br />
              <span>Seve: 1 ou 2 pesoas</span>
            </p>
            <Button title={'Adicionar ao carrinho'} type="button">
              Adicionar ao carrinho - R$ 60,90
            </Button>
          </DivModal>
          <a href="#">
            <img
              className="img"
              src={fechar}
              alt="imagem fechar modal "
              onClick={() => setAbrirFechar(false)}
            />
          </a>
        </Modal>
        <div
          onClick={() => {
            setAbrirFechar(false)
          }}
          className="overlay"
        ></div>
      </ContaineModal>
    </>
  )
}

export default ProductPeril
