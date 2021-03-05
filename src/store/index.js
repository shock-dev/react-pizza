import { createStore } from 'redux';
import root from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(root, composeWithDevTools());

export default store;
