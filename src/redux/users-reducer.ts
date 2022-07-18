import {ActionsType} from './redux-store';


export const CHANGE_FOLLOW_USER = 'CHANGE_FOLLOW_USER';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';


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

export type UsersActionsType =
    ReturnType<typeof changeFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalCountAC>


const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
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

export const setCurrentPageAC = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
}) as const

export const setTotalCountAC = (totalUsersCount: number) => ({
    type: SET_TOTAL_COUNT,
    totalUsersCount
}) as const