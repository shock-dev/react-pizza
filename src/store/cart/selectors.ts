import { RootState } from '../types';

export const selectCartState = (state: RootState) => state.cart;

export const selectCartItems = (state: RootState) => selectCartState(state).items;

export const selectTotalPrice = (state: RootState) => selectCartState(state).totalPrice;

export const selectTotalCount = (state: RootState) => selectCartState(state).totalCount;
