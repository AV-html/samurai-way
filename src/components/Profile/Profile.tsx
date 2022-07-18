import React from 'react';
import p from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostContainer';
import {ProfileContainerPropsType} from './ProfileContainer';


export function Profile(props: ProfileContainerPropsType) {
    return (
        <div className={p.profile}>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    );
}

