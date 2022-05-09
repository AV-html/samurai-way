import React from 'react';
import n from './Navbar.module.css';

export function Navbar() {
    return (
        <nav className={n.nav}>
            <ul className={n.list}>
                <li className={n.item}>
                    <a href="/profile" className={n.active}>Profile</a>
                </li>
                <li className={n.item}>
                    <a href="/messages">Messages</a>
                </li>
                <li className={n.item}>
                    <a href="/news">News</a>
                </li>
                <li className={n.item}>
                    <a href="/music">Music</a>
                </li>
                <li className={n.item}>
                    <a href="/settings">Settings</a>
                </li>
            </ul>
        </nav>
    )
        ;
}
