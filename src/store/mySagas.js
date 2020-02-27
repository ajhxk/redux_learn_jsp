import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import  * as TYPES from './actionTypes';
import { getInitListAction } from './actionCreators'

function* mySaga() {
    yield takeEvery(TYPES.GET_MY_LIST, getList)
}

function* getList() {
    console.log('jspang')
    // axios.get('https://www.studyinghome.com/mock/5e55c2732cb0d073b813a478/redux_learn/getList').then(res => {
    //         const data = res.data;
    //         const action = getInitListAction(data)
    //         put(action);
    //     })
    const res = yield axios.get('https://www.studyinghome.com/mock/5e55c2732cb0d073b813a478/redux_learn/getList')
    const action = getInitListAction(res.data)
    yield put(action)
}

export default mySaga