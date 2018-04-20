import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
import TodoList from './TodoList.js';
import { connect } from 'react-redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import { Router, Route, Switch } from 'react-router'

const initialState = {
   task: ''
};

const ACTION_CHANGE_STATE = 'ACTION_CHANGE_STATE';


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

const changeList = (newList ) =>{
        return {
            type: ACTION_CHANGE_STATE,
            payload: null
        };
};

const WrappedMainComponent = connect(mapStateToProps)(TodoList, DatePicker);

// const dispatch = this.props.dispatch;



ReactDOM.render(<Provider store={store}>

    <div>
        <WrappedMainComponent/>
        <DatePicker />
    </div>
    </Provider>,
document.querySelector('#root')
);






