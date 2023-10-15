import { CSSProperties } from 'react'
import { Imagem } from './styles'
import logo from '../../Assets/logo.png'
import { TagCarrinho, TagRestaurante } from './styles'
import { Paragrafo } from '../../styles'
export type Props = {
  style: CSSProperties
  restaura: string
  carrinho: string
  paragrafo?: string
}
const HeaderPerfil = ({ restaura, carrinho, paragrafo, style }: Props) => (
  <>
    <Imagem style={style}>
      <div>
        <TagRestaurante>
          <a href="#">{restaura}</a>
        </TagRestaurante>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <TagCarrinho>
          <a href="#">{carrinho}</a>
        </TagCarrinho>
      </div>

      <Paragrafo>{paragrafo}</Paragrafo>
    </Imagem>
  </>
)

export default HeaderPerfil
