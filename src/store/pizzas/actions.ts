import { FetchPizzasAction, PizzasActionType, PizzasState, SetPizzasAction, SetStatus } from './types';

export const fetchPizzas = (): FetchPizzasAction => ({
  type: PizzasActionType.FETCH_PIZZAS
});

export const setPizzas = (payload: PizzasState['items']): SetPizzasAction => ({
  type: PizzasActionType.SET_PIZZAS,
  payload
});

export const setStatus = (payload: PizzasState['status']): SetStatus => ({
  type: PizzasActionType.SET_STATUS,
  payload
});
