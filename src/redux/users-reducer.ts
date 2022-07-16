import {ActionsType} from './redux-store';


export const CHANGE_FOLLOW_USER = 'CHANGE_FOLLOW_USER';
export const SET_USERS = 'SET_USERS';


export type PhotosType = {
    small: null | string
    large: null | string
}

export type UserType = {
    name: string
    id: number
    photos: PhotosType
    status?: string
    followed: boolean

    // uniqueUrlName: null | string

    // location: LocationType
}

export type LocationType = {
    country: string
    city: string
}

export type UsersPageType = typeof initialState

export type UsersActionsType = ChangeFollowAT | SetUsersAT
type ChangeFollowAT = ReturnType<typeof changeFollowAC>
type SetUsersAT = ReturnType<typeof setUsersAC>

const initialState = {
    users: [] as Array<UserType>
}


export const userReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case CHANGE_FOLLOW_USER:
            return {
                ...state,
                users: state.users.map((u) => u.id === action.id ? {...u, followed: action.followed} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
    }

    return state
}


export const changeFollowAC = (id: number, followed: boolean) => ({
    type: CHANGE_FOLLOW_USER,
    id,
    followed
}) as const

export const setUsersAC = (users: Array<UserType>) => ({
    type: SET_USERS,
    users
}) as const