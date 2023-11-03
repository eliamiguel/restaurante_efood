import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Container1 = styled.ul`
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
  img{
    width:100%
  height: 167px;
  }

`
