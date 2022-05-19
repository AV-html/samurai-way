import React from 'react';
import p from './Profile.module.css';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ProfilePageType } from '../../redux/state';


type PropsType = {
    state: ProfilePageType
}

export function Profile(props: PropsType) {
    return (
        <div className={p.profile}>
            <ProfileInfo />
            <MyPosts state={props.state} />
        </div>
    );
}

