import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonNormal } from '../../Buttom/styles'
export const Overley = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  justify-content: flex-end;
`
export const SideBar = styled.aside`
  max-width: 360px;
  z-index: 1;
  width: 100%;

  padding: 32px 8px 8px;
  background-color: ${cores.rosa};
  ${ButtonNormal} {
    width: 344px;
    background-color: ${cores.rosaClaro};
    color: ${cores.rosa};
    margin-left: 0;
  }
`

export const ValorTotal = styled.div`
  display: flex;
  width: 344px;
  justify-content: space-between;
  color: ${cores.rosaClaro};
  margin-top: 40px;
  margin-bottom: 16px;
`
export const CardItem = styled.aside`
  background-color: ${cores.rosaClaro};
  color: ${cores.rosa};
  width: 344px;
  height: 100px;
  display: flex;
  margin-top: 16px;
  position: relative;
  div {
    display: block;

    h3 {
      margin-bottom: 16px;
      margin-top: 8px;
      font-weight: bold;
      font-size: 18px;
    }
    p {
      font-size: 14px;
      margin-bottom: 33px;
    }
  }
`
export const ImgPrato = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin: 8px 8px 12px 8px;
`

export const ImgLixeira = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 8px;
  left: 320px;
  cursor: pointer;
`
