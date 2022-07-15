import {combineReducers, legacy_createStore} from 'redux'
import {PostActionsType, profileReducer} from './profile-reducer';
import {MessageActionsType, messagesReducer} from './messages-reducer';
import {userReducer, UsersActionsType} from './users-reducer';


const rootReducer = combineReducers({
    // profileReducer: profileReducer
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: userReducer
})

export const store = legacy_createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>

export type ActionsType = PostActionsType | MessageActionsType | UsersActionsType


// @ts-ignore
window.store = store