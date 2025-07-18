import Button from '../../Buttom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../store'
import {
  closeDeliveryForm,
  open,
  openPaymentForm
} from '../../store/reducers/cart'
import {
  Overley,
  Container,
  FormAdress,
  InputGroup,
  InputNumberNumber,
  InputNumberCep,
  DivInput,
  Title,
  Label
} from './styles'

const Form = () => {
  const { isDeliveryFormOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeForm = () => {
    dispatch(closeDeliveryForm())
  }

  const backToCart = () => {
    dispatch(closeDeliveryForm())
    dispatch(open())
  }

  const form = useFormik({
    initialValues: {
      QuermRecebera: '',
      adress: '',
      city: '',
      cep: '',
      numeroCasa: '',
      complemento: ''
    },
    validationSchema: Yup.object({
      QuermRecebera: Yup.string()
        .min(5, 'o nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string()
        .email('Endereço invalido')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(8, 'O campo precisa ter 8 caracters')
        .max(30, 'O campo precisa ter 30 caracters')
        .required('O campo é obrigatório'),
      cep: Yup.number()
        .min(8, 'O campo precisa ter 8 caracters')
        .max(8, 'O campo precisa ter 8 caracters')
        .required('O campo é obrigatório'),
      numeroCasa: Yup.number()
        .min(1, 'O campo precisa ter 8 caracters')
        .max(5, 'O campo precisa ter 8 caracters')
        .required('O campo é obrigatório'),
      complemento: Yup.string().max(2000, 'O campo precisa ter 8 caracters')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <Container style={{ display: isDeliveryFormOpen ? 'flex' : 'none' }}>
      <Overley onClick={closeForm} />

      <FormAdress>
        <form onSubmit={form.handleSubmit}>
          <Title>Entrega</Title>
          <Label htmlFor="QuermRecebera">Quem ira receber</Label>
          <InputGroup
            name="QuermRecebera"
            value={form.values.QuermRecebera}
            type="text"
            id="QuermRecebera"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <Label htmlFor="adress">Endereço</Label>
          <InputGroup
            name="adress"
            value={form.values.adress}
            type="text"
            id="adress"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <Label htmlFor="city">Cidade</Label>
          <InputGroup
            name="city"
            value={form.values.city}
            type="text"
            id="city"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <DivInput>
            <InputNumberNumber>
              <Label htmlFor="cep">CEP</Label>
              <InputGroup
                name="cep"
                value={form.values.cep}
                type="text"
                id="cep"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputNumberNumber>
            <InputNumberCep>
              <Label htmlFor="numeroCasa">Número</Label>
              <InputGroup
                name="numeroCasa"
                value={form.values.numeroCasa}
                type="text"
                id="numeroCasa"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputNumberCep>
          </DivInput>
          <Label htmlFor="complemento">Complemento (Opcional)</Label>
          <InputGroup
            name="complemento"
            value={form.values.complemento}
            type="text"
            id="complemento"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />

          <Button
            title="Continuar com o pagamento"
            type="button"
            onClick={() => dispatch(openPaymentForm())}
          >
            Continuar com o pagamento
          </Button>
        </form>
        <Button
          title="Voltar para o carrinho"
          type="button"
          onClick={backToCart}
        >
          Voltar para o carrinho
        </Button>
      </FormAdress>
    </Container>
  )
}

export default Form
