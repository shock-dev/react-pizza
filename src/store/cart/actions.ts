import { CartActionType, ICartItem, PlusCartItemAction, SetCartItemAction } from './types';

export const setCartItem = (payload: ICartItem): SetCartItemAction => ({
  type: CartActionType.SET_CART_ITEM,
  payload
});

export const plusCartItem = (payload: ICartItem['id']): PlusCartItemAction => ({
  type: CartActionType.PLUS_CART_ITEM,
  payload
});
