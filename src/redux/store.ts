import {v1} from 'uuid';
import {PostActionsType, profileReducer} from './profile-reducer';
import {MessageActionsType, messagesReducer} from './messages-reducer';


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

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type PostsDataType = Array<PostType>
export type ProfilePageType = {
    postsData: PostsDataType
    newPostText: string
}


export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    // sidebar: object
}

export type StoreType = {
    _state: StateType
    _renderTree: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}


export const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            postsData: [
                {
                    id: v1(),
                    message: '\'Doloremque dolorum, exercitationem libero nam odit porro quaerat, sequi similique tempore? Cumque, illum, optio.\'!',
                    likesCount: 15
                },
                {
                    id: v1(),
                    message: 'Consectetur adipisicing elit. Alias distinctio eius est laborum magni rerum!',
                    likesCount: 20
                },
                {
                    id: v1(),
                    message: 'Adipisci aut culpa doloremque dolorum, exercitationem libero nam odit porro quaerat sequ',
                    likesCount: 2
                }
            ],
        },
        messagesPage: {
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
        },
        // sidebar: {}
    },
    _renderTree() {
    },
    subscribe(observer) {
        this._renderTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        // this._state.sidebar
        this._renderTree(this._state)
    }
}


export type ActionsType = PostActionsType | MessageActionsType





