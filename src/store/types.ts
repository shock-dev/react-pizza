import { FiltersState } from './filters/types';
import { PizzasState } from './pizzas/types';
import { CartState } from './cart/types';

export interface RootState {
  filters: FiltersState
  pizzas: PizzasState
  cart: CartState
}

export enum EntityStatus {
  NEVER = 'NEVER',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
