import Button from '../../Buttom'
import { useState } from 'react'
import { getDescripion, FormatPrice } from '../../utils'

import {
  ContaineModal,
  Container,
  DivModal,
  Modal,
  Paragrafo,
  Title
} from './styles'

import fechar from '../../Assets/fechar.png'

type Props = {
  nome: string
  descricao: string
  foto: string
  porcao?: string
  preco?: number
  id: number
}

const ProductPeril = ({ foto, nome, descricao, porcao, preco }: Props) => {
  const [abrirFechar, setAbrirFechar] = useState(false)
  return (
    <>
      <Container>
        <img src={foto} />

        <div>
          <Title>{nome}</Title>
        </div>
        <Paragrafo>{getDescripion(descricao)}</Paragrafo>
        <Button
          title="Mais detalhes"
          type="button"
          onClick={() => setAbrirFechar(true)}
        >
          Adicionar ao carrinho
        </Button>
      </Container>

      <ContaineModal className={abrirFechar ? 'visivel' : ''}>
        <Modal>
          <img src={foto} alt="imagem da gastronomia" />
          <DivModal>
            <h3>{nome}</h3>
            <p>
              {descricao}
              <br />
              <br />
              <span>{porcao}</span>
            </p>
            <Button title={'Adicionar ao carrinho'} type="button">
              {`Adicionar ao carrinho - R$ ${FormatPrice(preco)}`}
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
