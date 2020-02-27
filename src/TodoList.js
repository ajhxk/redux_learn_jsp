import React, { Component } from 'react'
// import axios from 'axios'
import store from './store'
import TodoListUI from './TodoListUIFN'
import {
    getChangeInputAction,
    getAddItemAction,
    getDeleItemAction,
    getInitListAction,
    getTodoList,
    getMyListAction,
} from './store/actionCreators'


class TodoList extends Component {

    constructor (props) {
        super(props);
        this.state = store.getState();
        this.handleOnAddclick = this.handleOnAddclick.bind(this)
        this.handleOnDeleclick = this.handleOnDeleclick.bind(this)
        this.handleInputValueChange = this.handleInputValueChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        store.subscribe(this.handleStoreChange)
    }

    render() { 
        return ( 
            <TodoListUI 
                inputValue={this.state.inputValue}
                handleInputValueChange={this.handleInputValueChange}
                handleOnAddclick={this.handleOnAddclick}
                list={this.state.list}
                handleOnDeleclick={this.handleOnDeleclick}
            />
        );
    }

    // componentDidMount () {
    //     axios.get('https://www.studyinghome.com/mock/5e55c2732cb0d073b813a478/redux_learn/getList').then(res => {
    //         const data = res.data;
    //         const action = getInitListAction(data)
    //         store.dispatch(action)
    //     })
    // }

    // redux-thunk
    // componentDidMount () {
    //     const action = getTodoList()
    //     store.dispatch(action);
    // }

    componentDidMount () {
        const action = getMyListAction()
        store.dispatch(action)

    }

    handleOnAddclick () {
        store.dispatch(getAddItemAction());
    }

    handleOnDeleclick (index) {
        store.dispatch(getDeleItemAction(index));
    }

    handleInputValueChange (e) {
        const value = e.target.value;
        store.dispatch(getChangeInputAction(value));
    }
    
    handleStoreChange () {
        this.setState(store.getState())
    }
}
export default TodoList;