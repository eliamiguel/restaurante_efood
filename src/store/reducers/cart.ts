import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurante } from '../../pages/Home'

type CartState = {
  items: Restaurante[]
}

const initialState: CartState = {
  items: []
}
const carSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Restaurante>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = carSlice.actions
export default carSlice.reducer
