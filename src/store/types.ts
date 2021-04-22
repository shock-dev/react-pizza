import { FiltersState } from './filters/types';
import { PizzasState } from './pizzas/types';

export interface RootState {
  filters: FiltersState
  pizzas: PizzasState
}

export enum EntityStatus {
  NEVER = 'NEVER',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
