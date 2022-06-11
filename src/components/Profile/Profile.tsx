import React from 'react';
import p from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsType, PostsDataType} from '../../redux/store';


type PropsType = {
    postsData: PostsDataType
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export function Profile(props: PropsType) {
    return (
        <div className={p.profile}>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    );
}

