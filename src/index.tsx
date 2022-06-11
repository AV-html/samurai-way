import {store} from './redux/redux-store';
import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';
import './index.css';
import {StoreContext} from './StoreContext';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const renderTree = () => {
    root.render(
        <StoreContext.Provider value={store}>
            <App/>
        </StoreContext.Provider>
    )
}
renderTree()
store.subscribe(renderTree)
