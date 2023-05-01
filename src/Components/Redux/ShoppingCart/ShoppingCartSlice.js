import { createSlice } from '@reduxjs/toolkit';

const ShoppingCartSlice = createSlice({
    name: 'sales',
    initialState: [],
    reducers: {
      addSale: (state, action) => {
        state.push({...action.payload, quantity: 1});
      },
      removeSale: (state, action) => {
        const index = state.findIndex(sale => sale.id === action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      },
      updateQuantity: (state, action) => {
        const { id, quantity } = action.payload;
        const index = state.findIndex(sale => sale.id === id);
        if (index !== -1) {
          state[index].quantity = quantity;
        }
      },
    },
  });

export const { addSale, removeSale, updateQuantity } = ShoppingCartSlice.actions;

export default ShoppingCartSlice.reducer;