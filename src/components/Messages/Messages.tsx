import React from 'react';
import d from './Messages.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsDataType, MessagesDataType} from '../../index';


type PropsType = {
    dialogsData: DialogsDataType
    messagesData: MessagesDataType
}

export function Messages(props: PropsType) {

    const dialogsList = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messageList = props.messagesData.map(m => <Message message={m.message}/>);

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

