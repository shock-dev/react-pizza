export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_TO_CART',
    payload: pizzaObj
});

export const minusPizza = (key) => ({
    type: 'MINUS_PIZZA',
    payload: key
});

export const removePizza = (key) => ({
    type: 'REMOVE_PIZZA',
    payload: key
});
