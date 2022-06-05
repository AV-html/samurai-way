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


export const state: StateType = {
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
}

let renderTree: (state: StateType) => void = () => {
}

export const subscribe = (observer: (state: StateType) => void) => {
    renderTree = observer
}

export const addPost = () => {

    const newPost: PostType = {
        id: v1(),
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.postsData.push(newPost)

    state.profilePage.newPostText = '';
    renderTree(state)
}


export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    renderTree(state)
}