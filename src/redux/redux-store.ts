import {combineReducers, legacy_createStore} from 'redux'
import {profileReducer} from './profile-reducer';
import {messagesReducer} from './messages-reducer';


let reducers = combineReducers({
    // profileReducer: profileReducer
    profilePage: profileReducer,
    messagesPage: messagesReducer
})

export const store = legacy_createStore(reducers);