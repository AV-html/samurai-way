import {v1} from 'uuid';
import {ActionsType} from './redux-store';

export type PostActionsType =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostActionCreator>

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';


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

const initialState: ProfilePageType = {
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
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            state.postsData.push(newPost)
            state.newPostText = '';

            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.postText
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostActionCreator = (postText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    postText
} as const)