import React from 'react';
import n from './Navbar.module.css';
import {NavLink} from 'react-router-dom';


export type NavLinkClassNameType = {
    isActive: boolean
}

export function Navbar() {

    const getActiveClass = (navLink: NavLinkClassNameType) => navLink.isActive ? n.active : ''

    return (
        <nav className={n.nav}>
            <ul className={n.list}>
                <li className={n.item}>
                    <NavLink to="/profile" className={getActiveClass}>Profile</NavLink>
                </li>
                <li className={n.item}>
                    <NavLink to="/messages" className={getActiveClass}>Messages</NavLink>
                </li>
                <li className={n.item}>
                    <NavLink to="/news" className={getActiveClass}>News</NavLink>
                </li>
                <li className={n.item}>
                    <NavLink to="/music" className={getActiveClass}>Music</NavLink>
                </li>
                <li className={n.item}>
                    <NavLink to="/users" className={getActiveClass}>Users</NavLink>
                </li>
                <li className={n.item}>
                    <NavLink to="/settings" className={getActiveClass}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}
