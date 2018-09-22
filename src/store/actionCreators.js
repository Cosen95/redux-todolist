import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST, INIT_SAGA_LIST } from './actionTypes'

export const getInputChangeAction = (value)=> ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = ()=> ({
    type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (value)=> ({
    type: DELETE_TODO_ITEM,
    value
});

export const getInitList = (value)=> ({
    type: INIT_LIST,
    value
});

export const getInitSagaList = ()=> ({
    type: INIT_SAGA_LIST
})

// export const getTodoList = ()=> {
//     return ((dispatch) => {
//         axios.ajax({
//             url: '/itemList',
//             method: 'get',
//             data:{
//                 params:{ id:156 }
//             }
//         }).then((res) => {
//             const newArr = [];
//             res.data.item_list.forEach(item => {
//                 newArr.push(item.name);
//             })
//             const action = getInitList(newArr);
//             dispatch(action);
//         })
//     })
// }
