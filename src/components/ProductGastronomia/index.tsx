import Button from '../../Buttom'
import { Containe, DivModal, Modal } from '../../styles'

import fechar from '../../Assets/fechar.png'
import prato from '../../Assets/Sushi.png'
import { useState } from 'react'
import { Container, Paragrafo, Title } from './styles'
type Props = {
  title: string
  descricao: string
  button: string
  image: string
  pais?: string
  destaque?: string
}

const ProductGastronomia = ({ title, descricao, image, button }: Props) => {
  const [abrirFechar, setAbrirFechar] = useState(false)
  return (
    <>
      <Container>
        <img src={image} alt="Sushi" />

        <div>
          <Title>{title}</Title>
        </div>
        <Paragrafo>{descricao}</Paragrafo>

        <Button
          title="Mais detralhes"
          type="button"
          onClick={() => setAbrirFechar(true)}
        >
          {button}
        </Button>
      </Container>
      <Containe className={abrirFechar ? 'visivel' : ''}>
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
              Adicionar ao carrinho
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
      </Containe>
    </>
  )
}

export default ProductGastronomia
