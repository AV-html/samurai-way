import React from 'react';
import {StoreContext} from '../../StoreContext';
import {Messages} from './Messages';
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../redux/messages-reducer';


export function MessagesContainer() {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const addMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    }
                    const updateNewMessage = (text: string) => {
                        store.dispatch(updateNewMessageActionCreator(text))
                    }

                    const dialogsData = store.getState().messagesPage.dialogsData
                    const messagesData = store.getState().messagesPage.messagesData;
                    const newMessageText = store.getState().messagesPage.newMessageText;

                    return <Messages dialogsData={dialogsData}
                                     messagesData={messagesData}
                                     newPostText={newMessageText}
                                     addMessage={addMessage}
                                     updateNewMessage={updateNewMessage}
                    />
                }
            }
        </StoreContext.Consumer>

    );
}

