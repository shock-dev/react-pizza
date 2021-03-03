export interface Pizza {
    id: number;
    imageUrl: string;
    name: string;
    types: number[];
    sizes: number[];
    price: number,
    category: number,
    rating: number
}

export interface PizzaState {
    pizzas: Pizza[];
    isLoading: boolean;
}

export enum PizzaActionTypes {
    SET_PIZZA = 'SET_PIZZA',
    CHANGE_LOADING = 'CHANGE_LOADING'
}

interface SetPizzas {
    type: PizzaActionTypes.SET_PIZZA;
    payload: Pizza[];
}

interface ChangeLoading {
    type: PizzaActionTypes.CHANGE_LOADING;
    payload: boolean;
}

export type PizzaAction = SetPizzas | ChangeLoading;
