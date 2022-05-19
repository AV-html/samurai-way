import React from 'react';
import d from './Messages.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {MessagesPageType} from '../../redux/state';


type PropsType = {
    state: MessagesPageType
}

export function Messages(props: PropsType) {

    const dialogsList = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messageList = props.state.messagesData.map(m => <Message message={m.message}/>);

    return (
        <div className={d.messages}>
            <h3 className={d.title}>Messages</h3>
            <div className={d.dialogs}>
                <ul className={d.list}>
                    {dialogsList}
                </ul>

                <ul className={d['message-list']}>
                    {messageList}
                </ul>
            </div>
        </div>
    );
}

