import styled from 'styled-components'
import { cores, breakpoint } from '../../styles'
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
  justify-content: flex-end;

  @media (max-width: ${breakpoint.tablet}) {
    justify-content: center;
  }
`

export const SideBar = styled.aside`
  max-width: 360px;
  z-index: 1;
  width: 100%;
  padding: 32px 8px 8px;
  background-color: ${cores.rosa};

  @media (max-width: ${breakpoint.tablet}) {
    max-width: 100%;
    width: 100%;
    height: 100%;
    padding: 16px;
    overflow-y: auto;
  }

  ${ButtonNormal} {
    width: 344px;
    background-color: ${cores.rosaClaro};
    color: ${cores.rosa};
    margin-left: 0;

    @media (max-width: ${breakpoint.tablet}) {
      width: 100%;
      margin: 8px 0;
    }
  }
`

export const ValorTotal = styled.div`
  display: flex;
  width: 344px;
  justify-content: space-between;
  color: ${cores.rosaClaro};
  margin-top: 40px;
  margin-bottom: 16px;

  @media (max-width: ${breakpoint.tablet}) {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 12px;
  }
`

export const CardItem = styled.aside`
  background-color: ${cores.rosaClaro};
  color: ${cores.rosa};
  width: 344px;
  height: 100px;
  display: flex;
  margin-top: 16px;
  position: relative;

  @media (max-width: ${breakpoint.tablet}) {
    width: 100%;
    height: auto;
    min-height: 100px;
    margin-top: 12px;
  }

  div {
    display: block;

    h3 {
      margin-bottom: 16px;
      margin-top: 8px;
      font-weight: bold;
      font-size: 18px;

      @media (max-width: ${breakpoint.tablet}) {
        font-size: 16px;
        margin-bottom: 8px;
        margin-top: 4px;
      }
    }
    p {
      font-size: 14px;
      margin-bottom: 33px;

      @media (max-width: ${breakpoint.tablet}) {
        font-size: 13px;
        margin-bottom: 20px;
      }
    }
  }
`

export const ImgPrato = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin: 8px 8px 12px 8px;

  @media (max-width: ${breakpoint.tablet}) {
    width: 70px;
    height: 70px;
    margin: 6px;
  }
`

export const ImgLixeira = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 8px;
  left: 320px;
  cursor: pointer;

  @media (max-width: ${breakpoint.tablet}) {
    left: calc(100% - 30px);
    bottom: 6px;
  }
`
