import { combineReducers } from 'redux';
import ProfileReducer from './Profile/ProfileSlice';
import ProductReducer from './Products/ProductsSlice';
import ShoppingCartReducer from './ShoppingCart/ShoppingCartSlice';

const rootReducer = combineReducers({
  profile: ProfileReducer,
  products: ProductReducer,
  sales: ShoppingCartReducer
});

export default rootReducer;
