import {v1} from 'uuid';

export type PostsDataType = Array<PostType>
export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type DialogsDataType = Array<DialogType>
export type DialogType = {
    id: string
    name: string
}

export type MessagesDataType = Array<MessagesType>
export type MessagesType = {
    id: string
    message: string
}


export type ProfilePageType = {
    postsData: PostsDataType
    newPostText: string

}
export type MessagesPageType = {
    messagesData: MessagesDataType
    dialogsData: DialogsDataType
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

export type ActionsType = AddPostActionType | updateNewPostTextActionType
export type AddPostActionType = {
    type: 'ADD_POST'
}
export type updateNewPostTextActionType = {
    type: 'UPDATE_NEW_POST_TEXT'
    postText: string
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
    _renderTree(state) {
    },
    subscribe(observer) {
        this._renderTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD_POST') {
            const newPost: PostType = {
                id: v1(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = '';
            this._renderTree(this._state)
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.postText
            this._renderTree(this._state)
        }
    }
}




