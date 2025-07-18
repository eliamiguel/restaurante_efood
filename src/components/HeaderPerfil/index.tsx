import { CSSProperties } from 'react'
import { useDispatch } from 'react-redux'
import { open } from '../../store/reducers/cart'
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
}: Props) => {
  const dispatch = useDispatch()

  const openCart = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch(open())
  }

  return (
    <>
      <Imagem style={style}>
        <div>
          <TagRestaurante to="/">
            <a href="/">{restaura}</a>
          </TagRestaurante>
          <img src={logo} alt="logo" />
          <TagCarrinho>
            <a href="#" onClick={openCart}>
              {carrinho}
            </a>
          </TagCarrinho>
        </div>
        <Paragrafo>{paragrafo}</Paragrafo>
      </Imagem>
    </>
  )
}

export default HeaderPerfil
