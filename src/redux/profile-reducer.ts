import {v1} from 'uuid';
import {ActionsType} from './redux-store';
import {UserProfileType} from '../components/Profile/ProfileContainer';

export type PostActionsType =
    ReturnType<typeof addPost> |
    ReturnType<typeof updateNewPost> |
    ReturnType<typeof setUserProfile>

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = typeof initialState

const initialState = {
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
    ] as Array<PostType>,
    userProfile: null as UserProfileType | null
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT:

            return {
                ...state,
                newPostText: action.postText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.UserProfile
            }
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST} as const)
export const updateNewPost = (postText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    postText
} as const)

export const setUserProfile = (UserProfile: UserProfileType) => ({
    type: SET_USER_PROFILE,
    UserProfile
} as const)