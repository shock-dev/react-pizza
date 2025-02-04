import { Action } from 'redux';

export interface ICartItem {
  id: number
  name: string
  imageUrl: string
  type: string
  size: number
  price: number
  count: number
}

export interface CartState {
  items: ICartItem[]
  totalPrice: number
  totalCount: number
}

export enum CartActionType {
  SET_CART_ITEM = '@/cart/SET_CART_ITEM',
  PLUS_CART_ITEM = '@/cart/PLUS_CART_ITEM',
  MINUS_CART_ITEM = '@/cart/MINUS_CART_ITEM',
  UNSET_CART_ITEM = '@/cart/UNSET_CART_ITEM',
  CLEAR_CART = '@/cart/CLEAR_CART'
}

export interface SetCartItemAction extends Action {
  type: CartActionType.SET_CART_ITEM
  payload: ICartItem
}

export interface PlusCartItemAction extends Action {
  type: CartActionType.PLUS_CART_ITEM
  payload: ICartItem['id']
}

export interface MinusCartItemAction extends Action {
  type: CartActionType.MINUS_CART_ITEM
  payload: ICartItem['id']
}

export interface UnsetCartItemAction extends Action {
  type: CartActionType.UNSET_CART_ITEM
  payload: ICartItem['id']
}

export interface ClearCartAction extends Action {
  type: CartActionType.CLEAR_CART
}

export type CartAction =
  | SetCartItemAction
  | PlusCartItemAction
  | MinusCartItemAction
  | UnsetCartItemAction
  | ClearCartAction
