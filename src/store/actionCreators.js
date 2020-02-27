import axios from 'axios'

import  * as TYPES from './actionTypes';

export const getChangeInputAction = value => ({ type: TYPES.CHANGE_INPUT, value })

export const getAddItemAction = () => ({ type: TYPES.ADD_ITEM })

export const getDeleItemAction = (index) => ({ type: TYPES.DELE_ITEM, index })

export const getInitListAction = (data) => ({ type: TYPES.GET_INIT_LIST, data })

// redux-thunk
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://www.studyinghome.com/mock/5e55c2732cb0d073b813a478/redux_learn/getList').then(res => {
            const data = res.data;
            const action = getInitListAction(data)
            dispatch(action);
        })
    }
}

export const getMyListAction = (data) => ({ type: TYPES.GET_MY_LIST, data })