import prato from '../../Assets/perfil/image 3.png'
import lixeira from '../../Assets/perfil/lixeira.png'
import Button from '../../Buttom'
import {
  CardItem,
  CartContainer,
  Overley,
  SideBar,
  ImgLixeira,
  ImgPrato,
  ValorTotal
} from './styles'

const Cart = () => {
  return (
    <>
      <CartContainer>
        <Overley />
        <SideBar>
          <CardItem>
            <ImgPrato src={prato} alt="" />
            <div>
              <h3>Titulo</h3>
              <p>R$ 60, 00</p>
            </div>
            <ImgLixeira src={lixeira} alt="Lixeira" />
          </CardItem>
          <CardItem>
            <ImgPrato src={prato} alt="" />
            <div>
              <h3>Titulo</h3>
              <p>R$ 60, 00</p>
            </div>
            <ImgLixeira src={lixeira} alt="Lixeira" />
          </CardItem>

          <ValorTotal>
            <p>Valor Total</p> <span>R$ 60, 00 </span>
          </ValorTotal>
          <Button title={'Continuar com a entrega'} type={'button'}>
            Continuar com a entrega
          </Button>
        </SideBar>
      </CartContainer>
    </>
  )
}

export default Cart
