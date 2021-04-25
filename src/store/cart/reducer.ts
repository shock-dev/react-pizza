import produce, { Draft } from 'immer';
import { CartAction, CartActionType, CartState } from './types';

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalCount: 0
};

const cart = produce((draft: Draft<CartState>, action: CartAction) => {
  switch (action.type) {
    case CartActionType.SET_CART_ITEM:
      draft.items.push(action.payload);
      draft.totalPrice += action.payload.price;
      draft.totalCount += 1;
      break;

    case CartActionType.PLUS_CART_ITEM:
      const index = draft.items.findIndex((item) => item.id === action.payload);
      // @ts-ignore
      ++draft.items[index].count;
      draft.totalPrice += draft.items[index].price;
      draft.totalCount += 1;
      break;
    default:
      break;
  }
}, initialState);

export default cart;
