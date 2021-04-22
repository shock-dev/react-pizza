import produce, { Draft } from 'immer';
import { PizzasAction, PizzasActionType, PizzasState } from './types';
import { EntityStatus } from '../types';

const initialState: PizzasState = {
  items: [],
  status: EntityStatus.NEVER
};

const pizzas = produce((draft: Draft<PizzasState>, action: PizzasAction) => {
  switch (action.type) {
    case PizzasActionType.FETCH_PIZZAS:
      draft.items = [];
      draft.status = EntityStatus.LOADING;
      break;

    case PizzasActionType.SET_PIZZAS:
      draft.items = action.payload;
      draft.status = EntityStatus.SUCCESS;
      break;

    case PizzasActionType.SET_STATUS:
      draft.status = action.payload;
      break;

    default:
      break;
  }
}, initialState);

export default pizzas;
