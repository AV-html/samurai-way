import React from 'react';
import d from './Messages.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';


type DialogsDataType = Array<DialogType>
type DialogType = {
    id: string
    name: string
}
const dialogsData: DialogsDataType = [
    {id: '1', name: 'Evgeniy'},
    {id: '2', name: 'Mark'},
    {id: '3', name: 'Aleksey'},
    {id: '4', name: 'Pavel'},
    {id: '5', name: 'Oksana'},
    {id: '6', name: 'Vlad'}
]


type MessagesDataType = Array<MessagesType>
type MessagesType = {
    id: string
    message: string
}
const messagesData: MessagesDataType = [
    {id: '1', message: 'Hello!'},
    {id: '2', message: 'Hi!'},
    {id: '3', message: 'How are you'},
    {id: '4', message: 'You\'re busy?'}
]

export function Messages() {

    const dialogsList = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messageList = messagesData.map(m => <Message message={m.message}/>);

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

