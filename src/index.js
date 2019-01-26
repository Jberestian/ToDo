import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Switch, Route, Link  } from 'react-router-dom';
import { DatePicker } from 'antd';
import TodoList from './TodoList.js';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Actions from './component/actions/Actions'
import styled from 'styled-components';
import Button from "./component/Button";


const initialState = {
    task: ''
};

const ACTION_CHANGE_STATE = 'ACTION_CHANGE_STATE';

const changeList = (newList ) =>{
    return {
        type: ACTION_CHANGE_STATE,
        payload: null
    };
};
const rootReducer = (state = initialState, action) =>{
    switch (action.type){
        case ACTION_CHANGE_STATE:
            return{...state, changeList: action.payload}
    }
    return state;
};

const store = createStore(rootReducer);
console.log(store.getState());

const mapStateToProps = (state) =>{
    console.log(state);
    return{
        actionChangeList: state.actionChangeList
    };
};

const WrappedMainComponent = connect(mapStateToProps)(TodoList, DatePicker);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <div>
            <Button/>
            <nav>
                <ul>
                    <li><Link to='/date'>Date</Link></li>
                    <li><Link to='/home'>Home</Link></li>
                </ul>
            </nav>
        <Switch>
            <Route exact path="/" render={(props) => (<div>{<TodoList/>}</div>)}/>
            <Route path="/date" render={(props) => (<div>{<DatePicker/>}</div>)}/>
            <Route exact path="/home" render={(props) => (<div>{<TodoList/>}</div>)}/>
        </Switch>
    </div>
        </BrowserRouter>
    </Provider>,
document.querySelector('#root')
);






