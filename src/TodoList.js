import React,{ Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStoreChange);
        // console.log(store.getState());

    }
    handleInputChange = (e)=> {
        store.dispatch({
            type: 'change_input_value',
            value: e.target.value
        })
    }
    handleStoreChange = ()=> {
        this.setState(store.getState());
    }
    handleSubmit = ()=> {
        store.dispatch({
            type: 'add_todo_item'
        })
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
                <Button type="primary" onClick={this.handleSubmit}>提交</Button>
            </div>
            <List
                style={{ width:500 }}
                dataSource={this.state.list}
                renderItem={item => (<List.Item>{item}</List.Item>)}
            />
        </div>)
    }
}

export default TodoList;