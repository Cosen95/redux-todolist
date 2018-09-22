import React,{ Component } from 'react';
import 'antd/dist/antd.css';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitSagaList } from './store/actionCreators';
import TodoListUI from './TodoListUI';
import axios from './axios/index'

import store from './store';

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStoreChange);
        // console.log(store.getState());

    }
    componentDidMount(){
        const action = getInitSagaList();
        store.dispatch(action);
        // this.getItemList();
        // const action = getTodoList();
        // store.dispatch(action);
    }
    handleInputChange = (e)=> {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange = ()=> {
        this.setState(store.getState());
    }
    handleSubmit = ()=> {
        const action = getAddItemAction();
        store.dispatch(action);
    }
    handleDelete = (index)=> {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
    // getItemList = ()=> {
    //     axios.ajax({
    //         url: '/itemList',
    //         method: 'get',
    //         data:{
    //             params:{ id:156 }
    //         }
    //     }).then((res) => {
    //         const newArr = [];
    //         res.data.item_list.map(item => {
    //             newArr.push(item.name);
    //         })
    //         const action = getInitList(newArr);
    //         store.dispatch(action);
    //     })
    // }
    render(){
        return(
            <TodoListUI 
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange} 
                handleSubmit={this.handleSubmit}
                list={this.state.list}   
                handleDelete={this.handleDelete}
            />
        )
            
    }
}

export default TodoList;