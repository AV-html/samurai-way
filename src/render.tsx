import {addPost, StateType, updateNewPostText} from './redux/state';
import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';
import './render.css';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export const renderTree = (state: StateType) => {
    root.render(
        <App
            state={state}
            addPostCallback={addPost}
            updateNewPostTextCallback={updateNewPostText}
        />,
    );
}