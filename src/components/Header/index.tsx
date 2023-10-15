/* eslint-disable react/jsx-no-duplicate-props */
import { CSSProperties } from 'react'
import { Imagem, Paragrafo } from '../../styles'
import logo from '../../Assets/logo.png'
type Props = {
  style: CSSProperties
  paragrafo: string
  tamanhoImagem?: 'small' | 'big'
}
const Header = ({ paragrafo, style }: Props) => (
  <>
    <Imagem style={style}>
      <div>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <Paragrafo>{paragrafo}</Paragrafo>
    </Imagem>
  </>
)

export default Header
