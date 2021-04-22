import produce, { Draft } from 'immer';
import { FiltersAction, FiltersActionType, FiltersState } from './types';

const initialState: FiltersState = {
  category: null,
  sortBy: {
    name: 'популярности',
    type: 'popular',
    order: 'desc'
  }
};

const filters = produce((draft: Draft<FiltersState>, action: FiltersAction) => {
  switch (action.type) {
    case FiltersActionType.SET_CATEGORY:
      draft.category = action.payload;
      break;

    default:
      break;
  }
}, initialState);

export default filters;
