import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  rosaClaro: ' #FFf8f2',
  rosa: '#E66767',
  branco: '#FFFFFF',
  cinza: ' #ffffff68'
}

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  text-decoration: none;
  body{
    .btn{
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  padding: 5px;
  margin-left: 8px;
  border: none;
  background-color: ${cores.rosa};
    }
  }
}

`
export const Imagem = styled.div`
  max-width: 2000px;
  width: 100%;
  height: 298px;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;

  a,
  img {
    width: 125px;
    heigth: 58px;
  }
  div {
    padding-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    a {
      color: ${cores.rosa};
    }
  }
`
export const Paragrafo = styled.p`
  font-size: 36px;
  width: 539px;
  height: 384px;
  text-align: center;
  margin: 0 auto;
  margin-top: 84px;
  font-weight: bold;
  line-height: 42px;
  color: ${cores.rosa};
`
export const Containe = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.73);
  &.visivel {
    display: flex;
  }
`
export const Modal = styled.div`
  width: 1024px;
  height: 344px;
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
  display: flex;
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
