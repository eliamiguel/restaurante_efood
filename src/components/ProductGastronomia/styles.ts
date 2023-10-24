import { styled } from 'styled-components'
import { cores } from '../../styles'
import Button from '../../Buttom'
export const Container = styled.div`
  max-width: 1366px;
  width: 320px;
  border-radius: 10px;
  height: 360px;
  padding-bottom: 10px;
  background-color: ${cores.rosa};
  border: 4px solid ${cores.rosa};
  position: relative;

  > img {
    width: 100%;
    height: 167px;
    border-radius: 10px;
  }

  div {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    display: flex;
    align-items: center;

    img {
      width: 21px;
      height: 21px;
      margin-left: 5px;
    }
  }
  ${Button} {
    width: 40px;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${cores.rosaClaro};
  display: flex;
  align-items: center;
`
export const Paragrafo = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding: 8px;
  color: ${cores.rosaClaro};
`
