import { CategoryType, FiltersActionType, SetCategoryAction, SetSortByAction, SortByType } from './types';

export const setCategory = (payload: CategoryType): SetCategoryAction => ({
  type: FiltersActionType.SET_CATEGORY,
  payload
});

export const setSortBy = (payload: SortByType): SetSortByAction => ({
  type: FiltersActionType.SET_SORT_BY,
  payload
});
