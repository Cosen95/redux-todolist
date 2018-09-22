import { takeEvery, put } from 'redux-saga/effects';
import { INIT_SAGA_LIST } from './actionTypes';
import { getInitList } from './actionCreators';
import axios from '../axios/index';
import 'antd/dist/antd.css';
import { Modal } from 'antd';

function* getInitSagaList() {
    try {
        const res = yield axios.ajax({
            url: '/itemList',
            method: 'get',
            data: {
                params: {
                    id: 156
                }
            }
        })
        const newArr = [];
        res.data.item_list.map(item => {
            newArr.push(item.name);
        })
        const action = getInitList(newArr);
        yield put(action);
    } catch (e) {
        Modal.info({
            title: '提示',
            content: '服务繁忙，请稍后重试'
        })
    }
    
}

// generator函数
function* mySaga() {
    yield takeEvery(INIT_SAGA_LIST, getInitSagaList);
}

export default mySaga;