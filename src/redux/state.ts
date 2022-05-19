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
        postsData: [
            {
                id: '1',
                message: '\'Doloremque dolorum, exercitationem libero nam odit porro quaerat, sequi similique tempore? Cumque, illum, optio.\'!',
                likesCount: 15
            },
            {
                id: '2',
                message: 'Consectetur adipisicing elit. Alias distinctio eius est laborum magni rerum!',
                likesCount: 20
            },
            {
                id: '3',
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