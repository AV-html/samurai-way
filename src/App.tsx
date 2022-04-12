import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <Technologies/>
        </div>
    );
}

function Header() {
    return (
        <div>
            <a href="/home">Home</a>
            <a href="/feed">News Feed</a>
            <a href="/messages">Messages</a>
        </div>
    );
}

function Technologies() {
    return (
        <ul>
            <li>css</li>
            <li>html</li>
            <li>js</li>
            <li>react</li>
        </ul>
    );
}

export default App;
