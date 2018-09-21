import React,{ Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators';

import store from './store';

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStoreChange);
        // console.log(store.getState());

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
    render(){
        return(<div style={{ marginTop:20, marginLeft:20 }}>
            <div style={{ marginBottom:20 }}>
                <Input
                 defaultValue={this.state.inputValue}
                 placeholder="请输入" 
                 style={{ width:300, marginRight:10}}
                 onChange={this.handleInputChange}
                />
                <Button type="primary" onClick={this.handleSubmit}>添加</Button>
            </div>
            <List
                style={{ width:600 }}
                dataSource={this.state.list}
                renderItem={(item, index) => (<List.Item onClick={this.handleDelete.bind(this,index)}>{item}</List.Item>)}
            />
        </div>)
    }
}

export default TodoList;