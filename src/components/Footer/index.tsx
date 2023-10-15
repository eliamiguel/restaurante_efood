import fundo from '../../Assets/fundo.svg'
import logo from '../../Assets/logo.png'
import instagram from '../../Assets/instagram.svg'
import facebook from '../../Assets/facebook.svg'
import twiter from '../../Assets/twitter.svg'
import { Imagem } from '../../styles'
import { ImagemFooter, Paragrafo } from './styles'

const Footer = () => (
  <Imagem style={{ backgroundImage: `url(${fundo})` }}>
    <div>
      <img src={logo} alt="logo" />
    </div>

    <ImagemFooter>
      <a href="#">
        <img src={instagram} alt="logo do instagram" />
      </a>
      <a href="#">
        <img src={facebook} alt="logo do facebook" />
      </a>
      <a href="#">
        <img src={twiter} alt="logo do twiter" />
      </a>
    </ImagemFooter>
    <Paragrafo>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Paragrafo>
  </Imagem>
)

export default Footer
