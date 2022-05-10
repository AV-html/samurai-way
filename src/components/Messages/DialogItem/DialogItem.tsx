import d from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';
import {NavLinkClassNameType} from '../../Navbar/Navbar';


type DialogItemPropsType = {
    name: string
    id: string
}

export function DialogItem(props: DialogItemPropsType) {

    const getActiveClass = (navLink: NavLinkClassNameType) => navLink.isActive ? d.active : '';

    return (
        <li className={d.item}>
            <img src="https://www.montrealtherapy.com/wp-content/uploads/2016/07/avatars-4.png"
                 alt=""/>
            <NavLink to={props.id} className={getActiveClass}>{props.name}</NavLink>
        </li>
    )
}