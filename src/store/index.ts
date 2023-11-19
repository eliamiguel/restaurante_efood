import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import carReducer from './reducers/cart'

const store = configureStore({
  reducer: {
    cart: carReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
