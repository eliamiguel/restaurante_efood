import Button from '../../Buttom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import {
  closePaymentForm,
  openDeliveryForm,
  openOrderConfirmation
} from '../../store/reducers/cart'
import { FormatPrice } from '../../utils'
import {
  Overley,
  Container,
  FormPayment,
  InputGroup,
  InputRow,
  Title,
  Label,
  TotalValue
} from './styles'

const PaymentForm = () => {
  const { isPaymentFormOpen, itemsCart } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const closeForm = () => {
    dispatch(closePaymentForm())
  }

  const backToDelivery = () => {
    dispatch(closePaymentForm())
    dispatch(openDeliveryForm())
  }

  const totalValue = itemsCart.reduce((total, item) => total + item.preco, 0)

  const form = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiryMonth: '',
      expiryYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .matches(/^\d{16}$/, 'Número do cartão deve ter 16 dígitos')
        .required('O campo é obrigatório'),
      cvv: Yup.string()
        .matches(/^\d{3,4}$/, 'CVV deve ter 3 ou 4 dígitos')
        .required('O campo é obrigatório'),
      expiryMonth: Yup.string()
        .matches(/^(0[1-9]|1[0-2])$/, 'Mês deve ser entre 01 e 12')
        .required('O campo é obrigatório'),
      expiryYear: Yup.string()
        .matches(/^\d{4}$/, 'Ano deve ter 4 dígitos')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log('Dados do pagamento:', values)
      dispatch(openOrderConfirmation())
    }
  })

  return (
    <Container style={{ display: isPaymentFormOpen ? 'flex' : 'none' }}>
      <Overley onClick={closeForm} />

      <FormPayment>
        <form onSubmit={form.handleSubmit}>
          <Title>Pagamento - Valor a pagar R$ {FormatPrice(totalValue)}</Title>

          <Label htmlFor="cardName">Nome no cartão</Label>
          <InputGroup
            name="cardName"
            value={form.values.cardName}
            type="text"
            id="cardName"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            placeholder="João Paulo de Souza"
          />

          <Label htmlFor="cardNumber">Número do cartão</Label>
          <InputGroup
            name="cardNumber"
            value={form.values.cardNumber}
            type="text"
            id="cardNumber"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            placeholder="0000 0000 0000 0000"
            maxLength={16}
          />

          <InputRow>
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <InputGroup
                name="cvv"
                value={form.values.cvv}
                type="text"
                id="cvv"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="123"
                maxLength={4}
                style={{ width: '80px' }}
              />
            </div>
            <div>
              <Label htmlFor="expiryMonth">Mês de vencimento</Label>
              <InputGroup
                name="expiryMonth"
                value={form.values.expiryMonth}
                type="text"
                id="expiryMonth"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="MM"
                maxLength={2}
                style={{ width: '80px' }}
              />
            </div>
            <div>
              <Label htmlFor="expiryYear">Ano de vencimento</Label>
              <InputGroup
                name="expiryYear"
                value={form.values.expiryYear}
                type="text"
                id="expiryYear"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="AAAA"
                maxLength={4}
                style={{ width: '100px' }}
              />
            </div>
          </InputRow>

          <Button
            title="Finalizar pagamento"
            type="button"
            onClick={() => {
              console.log('Finalizando pagamento...')
              dispatch(openOrderConfirmation())
            }}
          >
            Finalizar pagamento
          </Button>
        </form>
        <Button
          title="Voltar para a edição de endereço"
          type="button"
          onClick={backToDelivery}
        >
          Voltar para a edição de endereço
        </Button>
      </FormPayment>
    </Container>
  )
}

export default PaymentForm
