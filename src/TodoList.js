import React,{ Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

class TodoList extends Component{
    render(){
        return(<div style={{ marginTop:20, marginLeft:20 }}>
            <div style={{ marginBottom:20 }}>
                <Input placeholder="请输入" style={{ width:300, marginRight:10}} />
                <Button type="primary">提交</Button>
            </div>
            <List
                style={{ width:500 }}
                dataSource={data}
                renderItem={item => (<List.Item>{item}</List.Item>)}
            />
        </div>)
    }
}

export default TodoList;