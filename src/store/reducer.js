/**
 * Reducer里只能接受state,不能改变state
 */

import  * as TYPES from './actionTypes';

const defaultState = {
    inputValue: 'Write Something',
    list: [],
};

export default (state = defaultState, action) => {
    
    if (action.type === TYPES.CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === TYPES.ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if (action.type === TYPES.DELE_ITEM) {
        let newState =JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }

    if (action.type ===TYPES.GET_INIT_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data.data.list
        return newState
    }

    return state;
}