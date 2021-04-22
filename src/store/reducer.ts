import { combineReducers } from 'redux';
import filters from './filters/reducer';

const root = combineReducers({
  filters
});

export default root;
