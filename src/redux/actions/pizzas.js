import axios from 'axios';

export const setLoaded = (bool) => ({
    type: 'SET_LOADED',
    payload: bool
});

export const fetchPizzas = () => dispatch => {
    dispatch(setLoaded(false));
    axios
        .get('http://localhost:5000/pizzas')
        .then(({ data }) => {
            dispatch(setPizzas(data));
        });
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})
