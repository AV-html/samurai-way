import React from 'react';
import d from './Messages.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';


export function Messages() {
    return (
        <div className={d.messages}>
            <h3 className={d.title}>Messages</h3>
            <div className={d.dialogs}>
                <ul className={d.list}>
                    <DialogItem name={'Evgeniy'} id={'1'}/>
                    <DialogItem name={'Mark'} id={'2'}/>
                    <DialogItem name={'Aleksey'} id={'3'}/>
                    <DialogItem name={'Pavel'} id={'4'}/>
                    <DialogItem name={'Oksana'} id={'5'}/>
                </ul>

                <ul className={d['message-list']}>
                    <Message message={'Hello!'}/>
                    <Message message={'Hi!'}/>
                    <Message message={'How are you'}/>
                    <Message message={'You\'re busy?'}/>
                </ul>
            </div>
        </div>
    );
}

