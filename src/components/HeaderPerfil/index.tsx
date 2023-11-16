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
export const HeaderPerfil = ({
  restaura,
  carrinho,
  paragrafo,
  style
}: Props) => (
  <>
    <Imagem style={style}>
      <div>
        <TagRestaurante to="/">
          <a href="/">{restaura}</a>
        </TagRestaurante>
        <img src={logo} alt="logo" />
        <TagCarrinho>
          <a href="#">{carrinho}</a>
        </TagCarrinho>
      </div>
      <Paragrafo>{paragrafo}</Paragrafo>
    </Imagem>
  </>
)

export default HeaderPerfil
