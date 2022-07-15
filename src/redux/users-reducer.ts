import {ActionsType} from './redux-store';


export const CHANGE_FOLLOW_USER = 'CHANGE_FOLLOW_USER';
export const SET_USERS = 'SET_USERS';

export type UserType = {
    id: string
    name: string
    isFollow: boolean
    status: string
    avatar?: string
    location: LocationType
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
                users: state.users.map((u) => u.id === action.userID ? {...u, isFollow: action.isFollow} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
    }

    return state
}


export const changeFollowAC = (userID: string, isFollow: boolean) => ({
    type: CHANGE_FOLLOW_USER,
    userID,
    isFollow
}) as const

export const setUsersAC = (users: Array<UserType>) => ({
    type: SET_USERS,
    users
}) as const