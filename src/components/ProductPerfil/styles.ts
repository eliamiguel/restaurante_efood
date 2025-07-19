import { styled } from 'styled-components'
import { cores, breakpoint } from '../../styles'
import { ButtonNormal } from '../../Buttom/styles'

export const Container = styled.div`
  max-width: 1366px;
  width: 320px;
  height: auto;
  min-height: 360px;
  padding-bottom: 10px;
  background-color: ${cores.rosa};
  border: 4px solid ${cores.rosa};
  position: relative;

  @media (max-width: ${breakpoint.tablet}) {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    min-height: 320px;
  }

  > img {
    width: 100%;
    height: 167px;
    object-fit: cover;
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
  margin-bottom: 16px;

  @media (max-width: ${breakpoint.tablet}) {
    font-size: 13px;
    line-height: 20px;
    padding: 12px 8px;
  }
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

  @media (max-width: ${breakpoint.tablet}) {
    padding: 16px;
    align-items: flex-start;
    padding-top: 60px;
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

  @media (max-width: ${breakpoint.tablet}) {
    width: 90%;
    max-width: 400px;
    height: auto;
    min-height: 400px;
    flex-direction: column;
    margin: 20px;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin: 32px 32px 32px;

    @media (max-width: ${breakpoint.tablet}) {
      width: 100%;
      height: 200px;
      margin: 16px;
    }
  }

  .img {
    width: 16px;
    height: 16px;
  }

  ${ButtonNormal} {
    width: 235px;

    @media (max-width: ${breakpoint.tablet}) {
      width: 100%;
      margin: 8px 0;
    }
  }
`
export const DivModal = styled.div`
  display: block;

  h3 {
    margin-top: 32px;
    margin-bottom: 16px;

    @media (max-width: ${breakpoint.tablet}) {
      margin-top: 16px;
      margin-bottom: 12px;
      font-size: 16px;
    }
  }

  p {
    width: 600px;
    margin-bottom: 16px;
    display: block;

    @media (max-width: ${breakpoint.tablet}) {
      width: 100%;
      font-size: 13px;
      line-height: 18px;
      margin-bottom: 12px;
    }
  }

  span {
    margin-top: 16px;
    padding-bottom: 30px;

    @media (max-width: ${breakpoint.tablet}) {
      margin-top: 12px;
      padding-bottom: 20px;
    }
  }
`
