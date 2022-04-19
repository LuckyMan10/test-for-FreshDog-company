import * as types from '../constants';

const setListItem = (payload) => ({
    type: types.SET_LIST_ITEM,
    payload
})

const removeListItem = (payload) => ({
    type: types.REMOVE_LIST_ITEM,
    payload
})

export { setListItem, removeListItem }