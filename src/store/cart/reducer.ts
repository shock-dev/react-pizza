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

    case CartActionType.UNSET_CART_ITEM:
      const indexForUnset = draft.items.findIndex((item) => item.id === action.payload);
      draft.totalPrice -= draft.items[indexForUnset].price * draft.items[indexForUnset].count;
      draft.totalCount -= draft.items[indexForUnset].count;
      draft.items.splice(indexForUnset, 1);
      break;

    case CartActionType.CLEAR_CART:
      draft.items = [];
      draft.totalCount = 0;
      draft.totalPrice = 0;
      break;

    default:
      break;
  }
}, initialState);

export default cart;
