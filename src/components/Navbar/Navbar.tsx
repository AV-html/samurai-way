import React from 'react';
import n from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

export function Navbar() {
    return (
        <nav className={n.nav}>
            <ul className={n.list}>
                <li className={n.item}>
                    <NavLink to="/profile" activeClassName={n.active}>Profile</NavLink>
                </li>
                <li className={n.item}>
                    <NavLink to="/messages" activeClassName={n.active}>Messages</NavLink>
                </li>
                <li className={n.item}>
                    <NavLink to="/news" activeClassName={n.active}>News</NavLink>
                </li>
                <li className={n.item}>
                    <NavLink to="/music" activeClassName={n.active}>Music</NavLink>
                </li>
                <li className={n.item}>
                    <NavLink to="/settings" activeClassName={n.active}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
        ;
}
