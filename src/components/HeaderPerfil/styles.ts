import styled from 'styled-components'
import { cores } from '../../styles'

export const TagRestaurante = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;
  text-align: left;
  color: ${cores.rosa};
`
export const TagCarrinho = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;
  text-align: right;
  color: ${cores.rosa};
`
export const Imagem = styled.div`
  max-width: 2000px;
  width: 100%;
  height: 186px;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;

  a,
  img {
    width: 125px;
    heigth: 58px;
  }
  div {
    padding-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    a {
      color: ${cores.rosa};
    }
  }
`
