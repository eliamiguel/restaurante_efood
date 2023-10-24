import styled from 'styled-components'
import { cores } from '../../../styles'

export const Container = styled.div`
  width: 1024px;
  margin: 0 auto 150px;
  margin-top: 70px;
  background-color: ${cores.rosaClaro};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  row-gap: 35px;
`
