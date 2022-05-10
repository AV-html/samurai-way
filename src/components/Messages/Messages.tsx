import React from 'react';
import d from './Messages.module.css'
import {NavLink} from 'react-router-dom';
import {NavLinkClassNameType} from '../Navbar/Navbar';

export function Messages() {
    const getActiveClass = (navLink: NavLinkClassNameType) => navLink.isActive ? d.active : ''

    return (
        <div className={d.messages}>
            <h3 className={d.title}>Messages</h3>
            <div className={d.dialogs}>
                <ul className={d.list}>
                    <li className={d.item}>
                        <img src="https://www.montrealtherapy.com/wp-content/uploads/2016/07/avatars-4.png"
                             alt=""/>
                        <NavLink to={'1'} className={getActiveClass}>Evgeniy</NavLink>
                    </li>
                    <li className={d.item}>
                        <img src="https://www.montrealtherapy.com/wp-content/uploads/2016/07/avatars-4.png"
                             alt=""/>
                        <NavLink to={'2'} className={getActiveClass}>Mark</NavLink>
                    </li>
                    <li className={d.item}>
                        <img src="https://www.montrealtherapy.com/wp-content/uploads/2016/07/avatars-4.png"
                             alt=""/>
                        <NavLink to={'3'} className={getActiveClass}>Aleksey</NavLink>

                    </li>
                    <li className={d.item}>
                        <img src="https://www.montrealtherapy.com/wp-content/uploads/2016/07/avatars-4.png"
                             alt=""/>
                        <NavLink to={'4'} className={getActiveClass}>Pavel</NavLink>

                    </li>
                </ul>

                <ul className={d['message-list']}>
                    <li className={d.message}>Hello!</li>
                    <li className={d.message}>Hi!</li>
                    <li className={d.message}>How are you?</li>
                </ul>
            </div>
        </div>
    );
}