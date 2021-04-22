import { EntityStatus } from '../types';
import { Action } from 'redux';

export interface IPizza {
  id: number,
  imageUrl: string
  name: string,
  types: number[],
  sizes: number[],
  price: number,
  category: number,
  rating: number
}

export interface PizzasState {
  items: IPizza[]
  status: EntityStatus
}

export enum PizzasActionType {
  FETCH_PIZZAS = '@/pizzas/FETCH_PIZZAS',
  SET_PIZZAS = '@/pizzas/SET_PIZZAS',
  SET_STATUS = '@/pizzas/SET_STATUS'
}

export interface FetchPizzasAction extends Action {
  type: PizzasActionType.FETCH_PIZZAS
}

export interface SetPizzasAction extends Action {
  type: PizzasActionType.SET_PIZZAS
  payload: PizzasState['items']
}

export interface SetStatus extends Action {
  type: PizzasActionType.SET_STATUS
  payload: PizzasState['status']
}

export type PizzasAction =
  | FetchPizzasAction
  | SetPizzasAction
  | SetStatus
