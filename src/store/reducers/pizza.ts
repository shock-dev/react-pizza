import { PizzaAction, PizzaActionTypes, PizzaState } from '../../types/pizza';

const initialState: PizzaState = {
    pizzas: [],
    isLoading: false
}

const pizza = (state = initialState, action: PizzaAction): PizzaState => {
    switch (action.type) {
        case PizzaActionTypes.SET_PIZZA:
            return {...state, pizzas: action.payload};
        case PizzaActionTypes.CHANGE_LOADING:
            return {...state, isLoading: !state.isLoading};
        default:
            return state;
    }
}

export default pizza;
