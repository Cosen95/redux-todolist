import React from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI = (props)=> {
    return(
        <div style={{ marginTop:20, marginLeft:20 }}>
            <div style={{ marginBottom:20 }}>
                <Input
                 defaultValue={props.inputValue}
                 placeholder="请输入" 
                 style={{ width:300, marginRight:10}}
                 onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleSubmit}>添加</Button>
            </div>
            <List
                style={{ width:600 }}
                dataSource={props.list}
                renderItem={(item, index) => (<List.Item onClick={() => {props.handleDelete(index)}}>{item}</List.Item>)}
            />
        </div>
    )
}

// class TodoListUI extends Component{
//     render(){
//         return(
//             <div style={{ marginTop:20, marginLeft:20 }}>
//                 <div style={{ marginBottom:20 }}>
//                     <Input
//                     defaultValue={this.props.inputValue}
//                     placeholder="请输入" 
//                     style={{ width:300, marginRight:10}}
//                     onChange={this.props.handleInputChange}
//                     />
//                     <Button type="primary" onClick={this.props.handleSubmit}>添加</Button>
//                 </div>
//                 <List
//                     style={{ width:600 }}
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => (<List.Item onClick={() => {this.props.handleDelete(index)}}>{item}</List.Item>)}
//                 />
//         </div>
//         )
//     }
// }

export default TodoListUI;