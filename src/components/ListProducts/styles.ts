import styled from 'styled-components'
import { breakpoint, cores } from '../../styles'

export const Container = styled.div`
  width: 1024px;
  margin: 0 auto 150px;
  margin-top: 70px;
  background-color: ${cores.rosaClaro};
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 70px;
  row-gap: 35px;
  color: ${cores.rosa};
  @media (max-width: ${breakpoint.desktop}) {
    max-width: 900px;
    row-gap: 30px;
    column-gap: 30px;
  }
  @media (max-width: ${breakpoint.desktop}) {
    grid-template-columns: 1fr;
    max-width: 500px;
    width: 85%;
  }
`
