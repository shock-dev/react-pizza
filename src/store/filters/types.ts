import { Action } from 'redux';

export type CategoryType = number | null

export interface SortByType {
  name: string
  type: 'popular' | 'price' | 'name',
  order: 'asc' | 'desc'
}

export interface FiltersState {
  category: CategoryType
  sortBy: SortByType
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
