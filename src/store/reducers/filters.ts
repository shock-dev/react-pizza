import { FilterAction, FiltersActionTypes, FiltersState } from '../../types/filters';

const initialState: FiltersState = {
    category: 0,
    sortBy: 'popular'
}

const filters = (state = initialState, action: FilterAction): FiltersState => {
    switch (action.type) {
        case FiltersActionTypes.SET_SORT_BY:
            return {...state, sortBy: action.payload};
        case FiltersActionTypes.SET_CATEGORY:
            return {...state, category: action.payload};
        default:
            return state;
    }
}

export default filters;
