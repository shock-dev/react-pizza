import { CategoryType, FiltersActionType, SortByType } from './types';

export const setCategory = (payload: CategoryType) => ({
  type: FiltersActionType.SET_CATEGORY,
  payload
});

export const setSortBy = (payload: SortByType) => ({
  type: FiltersActionType.SET_SORT_BY,
  payload
});
