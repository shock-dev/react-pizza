import filters from './filters';
import pizzas from './pizzas';
import { combineReducers } from 'redux';

const root = combineReducers({
    filters,
    pizzas
});

export default root;
