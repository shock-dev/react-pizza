import {
  CartActionType,
  ClearCartAction,
  ICartItem,
  MinusCartItemAction,
  PlusCartItemAction,
  SetCartItemAction,
  UnsetCartItemAction
} from './types';

export const setCartItem = (payload: ICartItem): SetCartItemAction => ({
  type: CartActionType.SET_CART_ITEM,
  payload
});

export const plusCartItem = (payload: ICartItem['id']): PlusCartItemAction => ({
  type: CartActionType.PLUS_CART_ITEM,
  payload
});

export const minusCartItem = (payload: ICartItem['id']): MinusCartItemAction => ({
  type: CartActionType.MINUS_CART_ITEM,
  payload
});

export const unsetCartItem = (payload: ICartItem['id']): UnsetCartItemAction => ({
  type: CartActionType.UNSET_CART_ITEM,
  payload
});

export const clearCart = (): ClearCartAction => ({
  type: CartActionType.CLEAR_CART
});

