import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  width: 1024px;
  height: 1290px;
  margin: 0 auto;
  margin-top: 70px;
  background-color: ${cores.rosaClaro};
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 70px;
`
