import React from 'react';
import styles from './User.module.css'
import {UserType} from '../../../redux/users-reducer';
import avatar from './../../../assets/images/avatar.png'


type PropsType = {
    user: UserType
    changeFollow: () => void
}

export const User: React.FC<PropsType> = (
    {
        user,
        changeFollow
    }) => {

    const onFollowClickHandler = () => {
        changeFollow()
    };

    return (
        <li className={styles.user}>
            <div className={styles.avatar}>
                <img
                    src={user.photos?.small ? user.photos.small : avatar}
                    alt="user avatar"/>
                <button
                    onClick={onFollowClickHandler}
                    className={user.followed ? styles.follow : `${styles.follow} ${styles.unfollow}`}
                >
                    {user.followed ? 'Follow' : 'Unfollow'}
                </button>
            </div>
            <div className={styles.body}>
                <div className={styles.info}>
                    <div className={styles.name}>{user.name}</div>
                    <div className={styles.status}>{user.status}</div>
                </div>
                <div className={styles.address}>
                    <div className={styles.country}>user.location.country,</div>
                    <div className={styles.city}>user.location.city</div>
                </div>
            </div>
        </li>
    );
};