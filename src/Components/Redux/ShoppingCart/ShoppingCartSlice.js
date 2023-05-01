import { createSlice } from '@reduxjs/toolkit';

const ShoppingCartSlice = createSlice({
  name: 'sales',
  initialState: {
    sales: [],
    cash: 0
  },
  reducers: {
    addSale: (state, action) => {
      state.sales.push({ ...action.payload, quantity: 1 });
    },
    removeSale: (state, action) => {
      const index = state.sales.findIndex(sale => sale.id === action.payload);
      if (index !== -1) {
        state.sales.splice(index, 1);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const sale = state.sales.find(sale => sale.id === id);
      if (sale) {
        sale.quantity = quantity;
      }
    },
    updateCash: (state, action) => {
      state.cash = action.payload;
    },
  },
});

export const { addSale, removeSale, updateQuantity, updateCash } = ShoppingCartSlice.actions;

export default ShoppingCartSlice.reducer;
