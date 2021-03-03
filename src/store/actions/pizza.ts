import { Pizza, PizzaActionTypes } from '../../types/pizza';

export const setPizzas = (payload: Pizza[]) => ({
    type: PizzaActionTypes.SET_PIZZA,
    payload
});

export const changeLoading = () => ({
    type: PizzaActionTypes.CHANGE_LOADING
});
