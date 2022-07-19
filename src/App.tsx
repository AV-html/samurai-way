import React from 'react';
import './App.css';

import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';

import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {MessagesContainer} from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <main className={'main'}>
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="/profile"/>}
                        />
                        <Route
                            path={'/profile/'}
                            element={<ProfileContainer/>}
                        />
                        <Route
                            path={'/profile/:userId'}
                            element={<ProfileContainer/>}
                        />
                        <Route
                            path={'/messages/*'}
                            element={<MessagesContainer/>}
                        />

                        <Route path={'/news/*'} element={<News/>}/>
                        <Route path={'/music/*'} element={<Music/>}/>
                        <Route path={'/users/*'} element={<UsersContainer/>}/>
                        <Route path={'/settings/*'} element={<Settings/>}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}


export default App;
