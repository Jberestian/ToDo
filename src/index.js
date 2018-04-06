import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
import TodoList from './TodoList.js'
import { createStore } from 'redux'


var destination = document.querySelector('#container');

ReactDOM.render(
    <div>
        <TodoList/>
        <DatePicker />
    </div>,
    destination
);


