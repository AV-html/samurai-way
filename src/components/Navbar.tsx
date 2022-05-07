import React from 'react';
import n from './Navbar.module.css';

export function Navbar() {
    return (
        <nav className={n.nav}>
            <ul className={n.list}>
                <li className={n.item}>
                    <a href="#r" className={n.active}>Profile</a>
                </li>
                <li className={n.item}>
                    <a href="#r">Messages</a>
                </li>
                <li className={n.item}>
                    <a href="#r">News</a>
                </li>
                <li className={n.item}>
                    <a href="#r">Music</a>
                </li>
                <li className={n.item}>
                    <a href="#r">Settings</a>
                </li>
            </ul>
        </nav>
    )
        ;
}
