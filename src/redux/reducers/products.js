const initialState = {
    items: []
}

const products = (state = initialState, action) => {
    switch (action) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                items : action.payload
            }
        default:
            return state
    }
}

export default products
