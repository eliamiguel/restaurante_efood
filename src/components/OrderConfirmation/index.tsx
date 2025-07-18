import Button from '../../Buttom'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import { closeOrderConfirmation } from '../../store/reducers/cart'
import {
  Overley,
  Container,
  ConfirmationModal,
  Title,
  OrderId,
  Message,
  Disclaimer,
  ClosingRemark
} from './styles'

const OrderConfirmation = () => {
  const { isOrderConfirmationOpen } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  console.log(
    'OrderConfirmation - isOrderConfirmationOpen:',
    isOrderConfirmationOpen
  )

  const closeConfirmation = () => {
    dispatch(closeOrderConfirmation())
  }

  // Gerar um ID de pedido aleatório
  const orderId = Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <Container style={{ display: isOrderConfirmationOpen ? 'flex' : 'none' }}>
      <Overley onClick={closeConfirmation} />

      <ConfirmationModal>
        <Title>Pedido realizado - {orderId}</Title>

        <Message>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </Message>

        <Disclaimer>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
        </Disclaimer>

        <ClosingRemark>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </ClosingRemark>

        <Button title="Concluir" type="button" onClick={closeConfirmation}>
          Concluir
        </Button>
      </ConfirmationModal>
    </Container>
  )
}

export default OrderConfirmation
