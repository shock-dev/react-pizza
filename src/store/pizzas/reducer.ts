import produce, { Draft } from 'immer';
import { PizzasState } from './types';
import { EntityStatus } from '../types';

const initialState: PizzasState = {
  items: [],
  status: EntityStatus.NEVER
};

const pizzas = produce((draft: Draft<PizzasState>, action) => {
  switch (action.type) {
    default:
      break;
  }
}, initialState);

export default pizzas;
