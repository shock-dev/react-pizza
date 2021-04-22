import { combineReducers } from 'redux';
import filters from './filters/reducer';
import pizzas from './pizzas/reducer';

const root = combineReducers({
  filters,
  pizzas
});

export default root;
