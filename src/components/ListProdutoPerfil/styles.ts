import { styled } from 'styled-components'
import { cores, breakpoint } from '../../styles'

export const Container1 = styled.ul`
  max-width: 1024px;
  width: 100%;
  height: auto;
  min-height: 708px;
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 70px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
  row-gap: 24px;
  background-color: ${cores.rosaClaro};
  padding: 24px;

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
    column-gap: 16px;
    row-gap: 16px;
    padding: 16px;
    margin-top: 40px;
    margin-bottom: 40px;
    min-height: auto;
  }

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
  }
`
