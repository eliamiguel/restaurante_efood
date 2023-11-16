import { CSSProperties } from 'react'

import { Imagem, Paragrafo } from '../../styles'
import logo from '../../Assets/logo.png'
export type Props = {
  style: CSSProperties
  paragrafo?: string
  tamanhoImagem?: 'small' | 'big'
}
const Header = ({ paragrafo, style }: Props) => {
  return (
    <>
      <Imagem style={style}>
        <div>
          <img src={logo} alt="logo" />
        </div>

        <Paragrafo>{paragrafo}</Paragrafo>
      </Imagem>
    </>
  )
}

export default Header
