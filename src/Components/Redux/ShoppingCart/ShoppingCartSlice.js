import { createSlice } from '@reduxjs/toolkit';

const ShoppingCartSlice = createSlice({
  name: 'sales',
  initialState: {
    salesItems: [],
    cash: 0
  },
  reducers: {
    addSale: (state, action) => {
      state.salesItems.push({ ...action.payload, quantity: 1 });
    },
    removeSale: (state, action) => {
      const index = state.salesItems.findIndex(sale => sale.id === action.payload);
      if (index !== -1) {
        state.salesItems.splice(index, 1);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const sale = state.salesItems.find(sale => sale.id === id);
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
