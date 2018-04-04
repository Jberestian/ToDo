import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import TodoList from './TodoList.js'
// import TodoList from "./TodoList";

var destination = document.querySelector('#container');

ReactDOM.render(
    <div>
        <TodoList/>
        <DatePicker />
    </div>,
    destination,
);


