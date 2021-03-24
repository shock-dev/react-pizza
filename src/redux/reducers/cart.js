const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_TO_CART':
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? {
                        localTotalPrice: action.payload.price,
                        pizzas: [action.payload]
                    }
                    : {
                        localTotalPrice: state.items[action.payload.id].localTotalPrice + action.payload.price,
                        pizzas: [...state.items[action.payload.id].pizzas, action.payload]
                    }
            };

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice + action.payload.price,
                totalCount: ++state.totalCount
            };
        case 'MINUS_PIZZA':
            const pizzas = state.items[action.payload].pizzas;

            if (pizzas.length > 1) {
                const deletedPizza = pizzas.splice(pizzas.length - 1, 1)[0];

                return {
                    ...state,
                    totalPrice: state.totalPrice - deletedPizza.price,
                    totalCount: state.totalCount - 1,
                    items: {
                        ...state.items,
                        [action.payload]: {
                            ...state.items[action.payload],
                            localTotalPrice: state.items[action.payload].localTotalPrice - deletedPizza.price,
                            pizzas
                        }
                    }
                }
            }

            return state;
        default:
            return state;
    }
}

export default cart;
