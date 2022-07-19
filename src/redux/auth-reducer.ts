import {ActionsType} from './redux-store';


const SET_USER_DATA = 'SET_USER_DATA'

export type AuthStateType = typeof initialState
export type UserDataType = {
    id: number,
    login: string,
    email: string,
}


const initialState = {
    data: null as UserDataType | null,
    isAuth: false,
}

export type authActionsType = ReturnType<typeof setUserData>


export const authReducer = (state: AuthStateType = initialState, action: ActionsType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: {...action.data},
                isAuth: true
            }
        default:
            return state
    }
}


export const setUserData = (id: number, login: string, email: string) => ({
    type: SET_USER_DATA,
    data: {
        id,
        login,
        email
    }
}) as const
