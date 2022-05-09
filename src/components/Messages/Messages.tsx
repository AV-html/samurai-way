import React from 'react';
import d from './Messages.module.css'

export function Messages() {
    return (
        <div className={d.messages}>
            <h3 className={d.title}>Messages</h3>
            <div className={d.dialogs}>
                <ul className={d.list}>
                    <li className={d.item + ' ' + d.active}>
                        <img src="https://www.montrealtherapy.com/wp-content/uploads/2016/07/avatars-4.png"
                             alt=""/>
                        Evgeniy
                    </li>
                    <li className={d.item}>
                        <img src="https://www.montrealtherapy.com/wp-content/uploads/2016/07/avatars-4.png"
                             alt=""/>
                        Mark
                    </li>
                    <li className={d.item}>
                        <img src="https://www.montrealtherapy.com/wp-content/uploads/2016/07/avatars-4.png"
                             alt=""/>
                        Aleksey
                    </li>
                    <li className={d.item}>
                        <img src="https://www.montrealtherapy.com/wp-content/uploads/2016/07/avatars-4.png"
                             alt=""/>
                        Pavel
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