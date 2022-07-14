import {store} from './redux/redux-store';
import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';
import './index.css';
import {Provider} from 'react-redux';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const renderTree = () => {
    root.render(
        <Provider store={store}>
            <App/>
        </Provider>
    )
}
renderTree()
store.subscribe(renderTree)
