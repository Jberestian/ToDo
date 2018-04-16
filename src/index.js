import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
import TodoList from './TodoList.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, Switch } from 'react-router'

var destination = document.querySelector('#container');

ReactDOM.render(
    <div>
        <TodoList/>
        <DatePicker />
    </div>,
    destination


);




