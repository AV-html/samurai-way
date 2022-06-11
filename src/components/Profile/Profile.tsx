import React from 'react';
import p from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostContainer';


export function Profile() {
    return (
        <div className={p.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}

