import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioItem } from '../../pages/Home'

type CartState = {
  itemsCart: CardapioItem[]
  isOpen: boolean
  isDeliveryFormOpen: boolean
  isPaymentFormOpen: boolean
  isOrderConfirmationOpen: boolean
}

const initialState: CartState = {
  itemsCart: [],
  isOpen: false,
  isDeliveryFormOpen: false,
  isPaymentFormOpen: false,
  isOrderConfirmationOpen: false
}
const carSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      const existingItem = state.itemsCart.find(
        (item) => item.id === action.payload.id
      )
      if (!existingItem) {
        state.itemsCart.push(action.payload)
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    openDeliveryForm: (state) => {
      state.isDeliveryFormOpen = true
      state.isOpen = false
    },
    closeDeliveryForm: (state) => {
      state.isDeliveryFormOpen = false
    },
    openPaymentForm: (state) => {
      state.isPaymentFormOpen = true
      state.isDeliveryFormOpen = false
    },
    closePaymentForm: (state) => {
      state.isPaymentFormOpen = false
    },
    openOrderConfirmation: (state) => {
      state.isOrderConfirmationOpen = true
      state.isPaymentFormOpen = false
    },
    closeOrderConfirmation: (state) => {
      state.isOrderConfirmationOpen = false
    },
    remove: (state, action: PayloadAction<number>) => {
      state.itemsCart = state.itemsCart.filter(
        (item) => item.id !== action.payload
      )
    }
  }
})

export const {
  add,
  open,
  close,
  openDeliveryForm,
  closeDeliveryForm,
  openPaymentForm,
  closePaymentForm,
  remove,
  openOrderConfirmation,
  closeOrderConfirmation
} = carSlice.actions
export default carSlice.reducer
