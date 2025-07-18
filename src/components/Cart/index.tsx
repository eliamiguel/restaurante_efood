import prato from '../../Assets/perfil/image 3.png'
import lixeira from '../../Assets/perfil/lixeira.png'
import Button from '../../Buttom/index'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { close, openDeliveryForm, remove } from '../../store/reducers/cart'
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
  const { isOpen, itemsCart } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <>
      <CartContainer style={{ display: isOpen ? 'flex' : 'none' }}>
        <Overley onClick={closeCart} />
        <SideBar>
          {itemsCart.map((item) => (
            <CardItem key={item.id}>
              <ImgPrato src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>R$ {item.preco}</p>
              </div>
              <ImgLixeira
                src={lixeira}
                alt="Lixeira"
                onClick={() => removeItem(item.id)}
              />
            </CardItem>
          ))}

          <ValorTotal>
            <p>Valor Total</p>
            <span>
              R${' '}
              {itemsCart
                .reduce((total, item) => total + item.preco, 0)
                .toFixed(2)}
            </span>
          </ValorTotal>
          {itemsCart.length > 0 ? (
            <>
              <div className="btn-container mb-5">
                <Button
                  title={'Continuar com a entrega'}
                  type={'button'}
                  onClick={() => {
                    dispatch(openDeliveryForm())
                  }}
                >
                  Continuar com a entrega
                </Button>
              </div>
              <div className="btn-container-voltar mt-5">
                <Button
                  title={'Voltar para o carrinho'}
                  type={'button'}
                  onClick={() => {
                    dispatch(close())
                  }}
                >
                  Voltar para o carrinho
                </Button>
              </div>
            </>
          ) : (
            <div className="btn-container-voltar mt-5">
              <p
                className="text-center text-white mb-5"
                style={{ textAlign: 'center', color: '#fff' }}
              >
                Nenhum item no carrinho
              </p>
              <Button
                title={'Voltar para o cardápio'}
                type={'button'}
                onClick={() => {
                  closeCart()
                }}
              >
                Voltar para o cardápio
              </Button>
            </div>
          )}
        </SideBar>
      </CartContainer>
    </>
  )
}

export default Cart
