import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles'
import Footer from './components/Footer'
import Rotas from './routs'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import store from './store'
import Form from './components/Formulario'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
        <Cart />
        <Form />
      </BrowserRouter>
    </Provider>
  )
}

export default App
