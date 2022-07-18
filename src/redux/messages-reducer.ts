import {v1} from 'uuid';
import {ActionsType} from './redux-store';


export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}

export type MessageActionsType =
    ReturnType<typeof addMessage> |
    ReturnType<typeof updateNewMessage>

const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'


const initialState = {
    newMessageText: '',
    messagesData: [
        {id: '1', message: 'Hello!'},
        {id: '2', message: 'Hi!!!'},
        {id: '3', message: 'How are you'},
        {id: '4', message: 'You\'re busy?'}
    ] as Array<MessageType>,
    dialogsData: [
        {id: '1', name: 'Evgeniy'},
        {id: '2', name: 'Mark'},
        {id: '3', name: 'Aleksey'},
        {id: '4', name: 'Pavel'},
        {id: '5', name: 'Oksana'},
        {id: '6', name: 'Vlad'}
    ] as Array<DialogType>,
}

export type MessagesPageType = typeof initialState


export const messagesReducer = (state: MessagesPageType = initialState, action: ActionsType): MessagesPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.messageText
            };
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: v1(),
                message: state.newMessageText,
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            };
        default:
            return state;
    }
}

export const addMessage = () => ({type: ADD_MESSAGE} as const)
export const updateNewMessage = (messageText: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    messageText: messageText
} as const)
