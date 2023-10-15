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
