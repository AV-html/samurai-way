import {StateType} from './redux/store';
import {store} from './redux/redux-store';
import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';
import './index.css';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const renderTree = (state: StateType) => {
    root.render(
        <App
            state={state}
            dispatch={store.dispatch.bind(store)}
        />,
    );
}

renderTree(store.getState())
store.subscribe(() => {
    renderTree(store.getState())
})
