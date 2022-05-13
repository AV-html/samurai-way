import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export type PostsDataType = Array<PostType>
export type PostType = {
    id: string
    message: string
    likesCount: number
}
const postsData: PostsDataType = [
    {
        id: '1',
        message: '\'Doloremque dolorum, exercitationem libero nam odit porro quaerat, sequi similique tempore? Cumque, illum, optio.\'!',
        likesCount: 15
    },
    {
        id: '2',
        message: 'Consectetur adipisicing elit. Alias distinctio eius est laborum magni rerum!',
        likesCount: 20
    },
    {
        id: '3',
        message: 'Adipisci aut culpa doloremque dolorum, exercitationem libero nam odit porro quaerat sequ',
        likesCount: 2
    }
]


export type DialogsDataType = Array<DialogType>
export type DialogType = {
    id: string
    name: string
}
const dialogsData: DialogsDataType = [
    {id: '1', name: 'Evgeniy'},
    {id: '2', name: 'Mark'},
    {id: '3', name: 'Aleksey'},
    {id: '4', name: 'Pavel'},
    {id: '5', name: 'Oksana'},
    {id: '6', name: 'Vlad'}
]


export type MessagesDataType = Array<MessagesType>
export type MessagesType = {
    id: string
    message: string
}
const messagesData: MessagesDataType = [
    {id: '1', message: 'Hello!'},
    {id: '2', message: 'Hi!!!'},
    {id: '3', message: 'How are you'},
    {id: '4', message: 'You\'re busy?'}
]


ReactDOM.render(
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>,
    document.getElementById('root')
);