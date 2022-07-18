import p from './ProfileInfo.module.css';
import React from 'react';
import {ProfileContainerPropsType} from '../ProfileContainer';
import avatar from './../../../assets/images/avatar.png'
import {Preloader} from '../../common/Preloader/Preloader';

export function ProfileInfo({profile}: ProfileContainerPropsType) {
    if (!profile) {
        return <Preloader/>
    }
    
    return (
        <>
            <div className={p['profile-header']}>
                <img
                    src="https://assets.ey.com/content/dam/ey-sites/ey-com/cs_cz/topics/tax/tax-alerts/2021/03/ey-tax-alert-green.jpg"
                    alt="profile-header"/>
            </div>
            <div className={p['profile-info']}>
                <div className={p['profile-avatar']}>
                    <img src={profile.photos.large ? profile.photos.large : avatar}
                         alt="avatar"/>
                </div>
                <div className={p['profile-desc']}>
                    <div className={p['desc-name']}>
                        {profile.fullName}
                    </div>
                    <h3>About me:</h3>
                    <div className={p['desc-date']}>
                        {profile.aboutMe}
                        {profile.lookingForAJob}
                        {profile.lookingForAJobDescription}
                    </div>
                    <h3>Contacts:</h3>
                    <ul>
                        {
                            profile.contacts.vk !== null ?
                                (
                                    <li className={p['desc-site']}>
                                        <a href={profile.contacts.vk}
                                           target={'_blank'}
                                           rel="noopener noreferrer">VK</a>
                                    </li>
                                ) : null
                        }
                        {
                            profile.contacts.github !== null ?
                                (
                                    <li className={p['desc-site']}>
                                        <a href={profile.contacts.github}
                                           target={'_blank'}
                                           rel="noopener noreferrer">GitHub</a>
                                    </li>
                                ) : null
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}