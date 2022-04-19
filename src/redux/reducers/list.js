import * as types from '../constants';
import { sortObject } from '../../helpers/sort';

const initialState = {
    list: []
}

const list = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_LIST_ITEM:
            return {
                ...state,
                list: [...state.list, action.payload].sort(sortObject)
            }
        case types.REMOVE_LIST_ITEM:
            return {
                ...state,
                list: state.list.filter(item => `${item.id}` !== `${action.payload}`).sort(sortObject)
            }
        default:
            return state;
    }
}

export { list }