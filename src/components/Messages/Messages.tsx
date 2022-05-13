import React from 'react';
import d from './Messages.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';


export function Messages() {

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

    return (
        <div className={d.messages}>
            <h3 className={d.title}>Messages</h3>
            <div className={d.dialogs}>
                <ul className={d.list}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                    <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
                </ul>

                <ul className={d['message-list']}>
                    <Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>
                    <Message message={messagesData[2].message}/>
                    <Message message={messagesData[3].message}/>
                </ul>
            </div>
        </div>
    );
}

