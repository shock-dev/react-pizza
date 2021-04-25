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
      const indexForPlus = draft.items.findIndex((item) => item.id === action.payload);
      ++draft.items[indexForPlus].count;
      draft.totalPrice += draft.items[indexForPlus].price;
      draft.totalCount += 1;
      break;

    case CartActionType.MINUS_CART_ITEM:
      const indexForMinus = draft.items.findIndex((item) => item.id === action.payload);
      if (draft.items[indexForMinus].count > 1) {
        --draft.items[indexForMinus].count;
        draft.totalPrice -= draft.items[indexForMinus].price;
        draft.totalCount -= 1;
      }
      break;
    default:
      break;
  }
}, initialState);

export default cart;
