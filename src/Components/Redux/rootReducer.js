import { combineReducers } from 'redux';
import ProfileReducer from './Profile/ProfileSlice';
import ProductReducer from './Products/ProductsSlice';
import ShoppingCartReducer from './ShoppingCart/ShoppingCartSlice';
import LogsReducer from './Logs/LogsSlice';

const rootReducer = combineReducers({
  profile: ProfileReducer,
  products: ProductReducer,
  sales: ShoppingCartReducer,
  logs: LogsReducer,
});

export default rootReducer;
