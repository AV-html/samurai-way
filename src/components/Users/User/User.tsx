import React from 'react';
import styles from './User.module.css'
import {UserType} from '../../../redux/users-reducer';
import avatar from './../../../assets/images/avatar.png'
import {Link} from 'react-router-dom';


type PropsType = {
    user: UserType
    changeFollow: () => void
    followingInProgress: Array<number>
}

export const User: React.FC<PropsType> = (
    {
        user,
        changeFollow,
        followingInProgress
    }) => {

    const onFollowClickHandler = () => {
        changeFollow()
    };


    const followedClass = user.followed ? styles.follow : `${styles.follow} ${styles.unfollow}`
    const resultClassName = `${followedClass}`

    return (
        <li className={styles.user}>
            <div className={styles.avatar}>
                <Link to={`/profile/${user.id}`}>
                    <img
                        src={user.photos?.small ? user.photos.small : avatar}
                        alt="user avatar"/>
                </Link>


                <button
                    onClick={onFollowClickHandler}
                    disabled={followingInProgress.some(id => id === user.id)}
                    className={resultClassName}
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