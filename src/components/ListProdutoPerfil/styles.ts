import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Container1 = styled.div`
  max-width: 1024px;
  width:100%
  height: 708px;
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom:70px ;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
  row-gap: 24px;
  background-color: ${cores.rosaClaro};
`
export const Div = styled.div`
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
`
export const P1 = styled.p`
  width: 101px;
  font-size: 32px;
  line-height: 38px;
  text-align: left;
  color: ${cores.cinza};
  margin-left: 170px;
  padding-top: 20px;
`
export const P2 = styled.p`
  width: 676px;
  font-size: 32px;
  font-weight: bold;
  line-height: 38px;
  color: ${cores.branco};
  width: 676px;
  margin-left: 170px;
  margin-top: 155px;
`
