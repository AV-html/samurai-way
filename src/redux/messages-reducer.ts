import {v1} from 'uuid';
import {ActionsType} from './redux-store';


export type DialogsDataType = Array<DialogType>
export type DialogType = {
    id: string
    name: string
}
export type MessagesDataType = Array<MessageType>
export type MessageType = {
    id: string
    message: string
}
export type MessagesPageType = {
    newMessageText: string
    messagesData: MessagesDataType
    dialogsData: DialogsDataType
}

export type MessageActionsType =
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof updateNewMessageActionCreator>

const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'


const initialState: MessagesPageType = {
    newMessageText: '',
    messagesData: [
        {id: '1', message: 'Hello!'},
        {id: '2', message: 'Hi!!!'},
        {id: '3', message: 'How are you'},
        {id: '4', message: 'You\'re busy?'}
    ],
    dialogsData: [
        {id: '1', name: 'Evgeniy'},
        {id: '2', name: 'Mark'},
        {id: '3', name: 'Aleksey'},
        {id: '4', name: 'Pavel'},
        {id: '5', name: 'Oksana'},
        {id: '6', name: 'Vlad'}
    ],
}


export const messagesReducer = (state: MessagesPageType = initialState, action: ActionsType): MessagesPageType => {
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
