import { combineReducers } from 'redux';
import filters from './filters';
import pizza from './pizza';

const root = combineReducers({
    filters,
    pizza
});

export default root;
