import { SET_CATEGORY, SET_SORT_BY } from '../cases/filters';

export const setSortBy = ({ type, order }) => ({
    type: SET_SORT_BY,
    payload: { type, order }
});

export const setCategory = (index) => ({
    type: SET_CATEGORY,
    payload: index
});
