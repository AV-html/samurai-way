import {ActionsType, MessagesPageType, MessageType} from './state';
import {v1} from 'uuid';


export type MessageActionsType =
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof updateNewMessageActionCreator>

const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

export const messagesReducer = (state: MessagesPageType, action: ActionsType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.messageText
            return state;
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: v1(),
                message: state.newMessageText,
            }
            state.messagesData.push(newMessage)
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE} as const)
export const updateNewMessageActionCreator = (messageText: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    messageText: messageText
} as const)
