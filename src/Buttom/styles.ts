import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../styles'

export const ButtonLink = styled(Link)`
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  padding: 5px;
  margin-left: 8px;
  border: none;
  color: ${cores.rosaClaro};
  background-color: ${cores.rosa};
`

export const ButtonNormal = styled.button`
  width: 95%;
  height: 24px;
  margin-left: 8px;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
  border: none;
  color: ${cores.rosa};
  background-color: ${cores.rosaClaro};
`
