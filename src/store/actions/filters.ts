import { FiltersActionTypes } from '../../types/filters';

export const setSortBy = (payload: string) => ({
    type: FiltersActionTypes.SET_SORT_BY,
    payload
});

export const setCategory = (payload: number) => ({
    type: FiltersActionTypes.SET_CATEGORY,
    payload
});
