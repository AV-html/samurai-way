import {combineReducers, legacy_createStore} from 'redux'
import {PostActionsType, profileReducer} from './profile-reducer';
import {MessageActionsType, messagesReducer} from './messages-reducer';
import {userReducer, UsersActionsType} from './users-reducer';
import {authActionsType, authReducer} from './auth-reducer';


const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: userReducer,
    auth: authReducer,
})

export const store = legacy_createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>

export type ActionsType = PostActionsType | MessageActionsType | UsersActionsType | authActionsType


// @ts-ignore
window.store = store