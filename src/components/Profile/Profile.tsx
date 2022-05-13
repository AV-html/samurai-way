import React from 'react';
import p from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsDataType} from '../../redux/state';


type PropsType = {
    postsData: PostsDataType
}

export function Profile(props: PropsType) {
    return (
        <div className={p.profile}>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>
    );
}

