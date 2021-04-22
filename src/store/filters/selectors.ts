import { RootState } from '../types';

export const selectFiltersState = (state: RootState) => state.filters;

export const selectCategory = (state: RootState) => selectFiltersState(state).category;

export const selectSortBy = (state: RootState) => selectFiltersState(state).sortBy;
