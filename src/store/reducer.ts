import { combineReducers } from 'redux';
import filters from './filters/reducer';
import pizzas from './pizzas/reducer';
import cart from './cart/reducer';

const root = combineReducers({
  filters,
  pizzas,
  cart
});

export default root;
