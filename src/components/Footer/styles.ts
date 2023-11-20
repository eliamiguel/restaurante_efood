import styled from 'styled-components'
import { breakpoint, cores } from '../../styles'

export const Paragrafo = styled.p`
  width: 480px;
  height: 24px;
  margin: 0 auto;
  margin-top: 70px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  line-heigth: 11px;
  color: ${cores.rosa};
  @media (max-width: ${breakpoint.tablet}) {
    width: 400px;
  }
`
export const ImagemFooter = styled.div`
  width: 100px;
  height: 24px;
  margin: 0 auto;
  margin-top: 40px;
  img {
    width: 24px;
    height: 24px;
    font-size: 40px;
    margin-right: 8px;
  }
  @media (max-width: ${breakpoint.tablet}) {
    margin-top: 30px;
  }
`
