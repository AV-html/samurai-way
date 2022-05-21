import React from 'react';
import p from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsDataType} from '../../redux/state';


type PropsType = {
    postsData: PostsDataType
    addPostCallback: () => void
    updateNewPostTextCallback: (textPost: string) => void
    newPostText: string
}

export function Profile(props: PropsType) {
    return (
        <div className={p.profile}>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}
                     addPostCallback={props.addPostCallback}
                     updateNewPostTextCallback={props.updateNewPostTextCallback}
                     newPostText={props.newPostText}
            />
        </div>
    );
}

