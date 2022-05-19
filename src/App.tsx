import React from 'react';
import './App.css';

import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Messages } from './components/Messages/Messages';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { StateType } from './redux/state';


type PropsType = {
    state: StateType
}


function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header />
                <Navbar />
                <main className={'main'}>
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="/profile" />}
                        />
                        <Route
                            path={'/profile/*'}
                            element={<Profile
                                state={props.state.profilePage}
                            />}
                        />
                        <Route
                            path={'/messages/*'}
                            element={<Messages
                                state={props.state.messagesPage}
                            />}
                        />

                        <Route path={'/news/*'} element={<News />} />
                        <Route path={'/music/*'} element={<Music />} />
                        <Route path={'/settings/*'} element={<Settings />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}


export default App;
