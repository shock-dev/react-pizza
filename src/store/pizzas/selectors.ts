import { RootState } from '../types';

export const selectPizzasState = (state: RootState) => state.pizzas;

export const selectPizzas = (state: RootState) => selectPizzasState(state).items;

export const selectPizzasStatus = (state: RootState) => selectPizzasState(state).status;
