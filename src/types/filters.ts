export interface FiltersState {
    category: number;
    sortBy: string
}

export enum FiltersActionTypes {
    SET_SORT_BY = 'SET_SORT_BY',
    SET_CATEGORY = 'SET_CATEGORY'
}

interface SetSortByAction {
    type: FiltersActionTypes.SET_SORT_BY;
    payload: string;
}

interface SetCategoryAction {
    type: FiltersActionTypes.SET_CATEGORY;
    payload: number;
}

export type FilterAction = SetSortByAction | SetCategoryAction;
