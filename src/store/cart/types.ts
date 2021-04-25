import { Action } from 'redux';

export interface ICartItem {
  id?: number
  name: string
  imageUrl: string
  type: string
  size: number
  price: number
  count?: number
}

export interface CartState {
  items: ICartItem[]
  totalPrice: number
  totalCount: number
}

export enum CartActionType {
  SET_CART_ITEM = '@/cart/SET_CART_ITEM',
  PLUS_CART_ITEM = '@/cart/PLUS_CART_ITEM'
}

export interface SetCartItemAction extends Action {
  type: CartActionType.SET_CART_ITEM
  payload: ICartItem
}

export interface PlusCartItemAction extends Action {
  type: CartActionType.PLUS_CART_ITEM
  payload: ICartItem['id']
}

export type CartAction =
  | SetCartItemAction
  | PlusCartItemAction
