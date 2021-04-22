import { Action } from 'redux';

export type CategoryType = number | null
export type SortByType = 'popular' | 'price' | 'name'

export interface FiltersState {
  category: CategoryType
  sortBy: {
    name: string,
    type: SortByType
    order: 'asc' | 'desc'
  }
}

export enum FiltersActionType {
  SET_CATEGORY = '@/filters/SET_CATEGORY',
  SET_SORT_BY = '@/filters/SET_SORT_BY'
}

export interface SetCategoryAction extends Action {
  type: FiltersActionType.SET_CATEGORY,
  payload: CategoryType
}

export interface SetSortByAction extends Action {
  type: FiltersActionType.SET_SORT_BY,
  payload: SortByType
}

export type FiltersAction =
  | SetCategoryAction
  | SetSortByAction
