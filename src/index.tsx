import {addPost, StateType, updateNewPostText} from './redux/state';
import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';
import './index.css';
import {subscribe} from './redux/state';
import {state} from './redux/state';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const renderTree = (state: StateType) => {
    root.render(
        <App
            state={state}
            addPostCallback={addPost}
            updateNewPostTextCallback={updateNewPostText}
        />,
    );
}
renderTree(state)
subscribe(renderTree)
