import { styled } from 'styled-components'
import { cores } from '../../styles'
import { ButtonNormal } from '../../Buttom/styles'
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
export const ContaineModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;
  &.visivel {
    display: flex;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const Modal = styled.div`
  width: 1024px;
  height: 344px;
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
  display: flex;
  z-index: 1;
  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin: 32px 32px 32px;
  }
  .img {
    width: 16px;
    height: 16px;
  }
  ${ButtonNormal} {
    width: 218px;
  }
`
export const DivModal = styled.div`
  display: block;

  h3 {
    margin-top: 32px;
    margin-bottom: 16px;
  }
  p {
    width: 600px;
    margin-bottom: 16px;
    display: block;
  }
  span {
    margin-top: 16px;
    padding-bottom: 30px;
  }
`
