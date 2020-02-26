import  * as TYPES from './actionTypes';

export const getChangeInputAction = value => ({ type: TYPES.CHANGE_INPUT, value })

export const getAddItemAction = () => ({ type: TYPES.ADD_ITEM })

export const getDeleItemAction = (index) => ({ type: TYPES.DELE_ITEM, index })

export const getInitListAction = (data) => ({ type: TYPES.GET_INIT_LIST, data })