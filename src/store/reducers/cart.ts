import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioItem } from '../../pages/Home'

type CartState = {
  itemsCart: CardapioItem[]
}

const initialState: CartState = {
  itemsCart: []
}
const carSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      state.itemsCart.find((item) => item.id === action.payload.id)
    }
  }
})

export const { add } = carSlice.actions
export default carSlice.reducer
