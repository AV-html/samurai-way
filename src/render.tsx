import {addPost, StateType} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import './render.css';


export const renderTree = (state: StateType) => {
    ReactDOM.render(
        <App
            state={state}
            addPostCallback={addPost}
        />,
        document.getElementById('root')
    );
}