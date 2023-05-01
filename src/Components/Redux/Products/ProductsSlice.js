import { createSlice } from '@reduxjs/toolkit';
import Bailey from '../../Products/Bailey.png';
import Emperador from '../../Products/Emperador.png';
import Fundador from '../../Products/Fundador.png';
import GSMBlue from '../../Products/GSMBlue.png';
import Novelino from '../../Products/Novelino.png';
import RedHorse from '../../Products/RedHorse.png';
import SanMigLight from '../../Products/SanMigLight.png';
import SanMiguel from '../../Products/SanMiguel.png';
import Soju from '../../Products/Soju.png';
import Tanduay from '../../Products/Tanduay.png';
import TanduayIce from '../../Products/TanduayIce.png';
import TanduayIceBlue from '../../Products/TanduayIceBlue.png';
import TheBarLime from '../../Products/TheBarLime.png';
import TheBarPink from '../../Products/TheBarPink.png';
import TheBarPremium from '../../Products/TheBarPremium.png';

const initialState = {
  products: [
    { id: 1, name: "Bailey", price: 1090, image: Bailey },
  { id: 2, name: "Emperador", price: 132, image: Emperador },
  { id: 3, name: "Fundador", price: 425, image: Fundador },
  { id: 4, name: "GSMBlue", price: 120, image: GSMBlue },
  { id: 5, name: "Novelino", price: 304, image: Novelino },
  { id: 6, name: "RedHorse", price: 118, image: RedHorse },
  { id: 7, name: "SanMigLight", price: 55, image: SanMigLight },
  { id: 8, name: "SanMiguel", price: 120, image: SanMiguel },
  { id: 9, name: "Soju", price: 149, image: Soju },
  { id: 10, name: "Tanduay", price: 115, image: Tanduay },
  { id: 11, name: "TanduayIce", price: 42, image: TanduayIce },
  { id: 12, name: "TanduayIceBlue", price: 42, image: TanduayIceBlue },
  { id: 13, name: "TheBarLime", price: 104, image: TheBarLime },
  { id: 14, name: "TheBarPink", price: 104, image: TheBarPink },
  { id: 15, name: "TheBarPremium", price: 104, image: TheBarPremium }
  ]
  
};

export const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    }
  }
});

export const { addProduct, removeProduct } = ProductsSlice.actions;
export default ProductsSlice.reducer;
