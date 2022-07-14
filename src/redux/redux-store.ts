import {combineReducers, legacy_createStore} from 'redux'
import {PostActionsType, profileReducer} from './profile-reducer';
import {MessageActionsType, messagesReducer} from './messages-reducer';


const rootReducer = combineReducers({
    // profileReducer: profileReducer
    profilePage: profileReducer,
    messagesPage: messagesReducer
})

export const store = legacy_createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>

export type ActionsType = PostActionsType | MessageActionsType