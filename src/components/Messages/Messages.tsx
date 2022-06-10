import React, {ChangeEvent} from 'react';
import d from './Messages.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {
    ActionsType,
    DialogsDataType,
    MessagesDataType,
} from '../../redux/state';
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../redux/messages-reducer';


type PropsType = {
    dialogsData: DialogsDataType
    messagesData: MessagesDataType
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export function Messages(props: PropsType) {

    const dialogsList = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messageList = props.messagesData.map(m => <Message message={m.message}/>);


    const addMessageHandler = () => {
        props.dispatch(addMessageActionCreator())
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageActionCreator(e.currentTarget.value))
    }

    return (
        <div className={d.messages}>
            <h3 className={d.title}>Messages</h3>
            <div className={d.dialogs}>
                <ul className={d.list}>
                    {dialogsList}
                </ul>

                <div className={d['message-block']}>
                    <ul className={d['message-list']}>
                        {messageList}
                    </ul>
                    <div className={d['new-message-text']}>
                        <textarea cols={40}
                                  rows={5}
                                  placeholder="Your message..."
                                  onChange={onChangeHandler}
                                  value={props.newPostText}
                        />


                        <div className={d['wrap-btn']}>
                            <button onClick={addMessageHandler}
                                    type={'button'}
                            >
                                Publish
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

