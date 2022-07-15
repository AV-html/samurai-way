import React from 'react';
import styles from './User.module.css'


type PropsType = {
    name: string
    country: string
    city: string
    isFollow: boolean
    status: string
    avatar?: string
    changeFollow: () => void
}

export function User(props: PropsType) {
    const onFollowClickHandler = () => {
        props.changeFollow()
    };

    return (
        <li className={styles.user}>
            <div className={styles.avatar}>
                <img
                    src={props.avatar ? props.avatar : 'https://www.montrealtherapy.com/wp-content/uploads/2016/07/avatars-4.png'}
                    alt="user avatar"/>
                <button
                    onClick={onFollowClickHandler}
                    className={props.isFollow ? styles.follow : `${styles.follow} ${styles.unfollow}`}
                >
                    {props.isFollow ? 'Follow' : 'Unfollow'}
                </button>
            </div>
            <div className={styles.body}>
                <div className={styles.info}>
                    <div className={styles.name}>{props.name}</div>
                    <div className={styles.status}>{props.status}</div>
                </div>
                <div className={styles.address}>
                    <div className={styles.country}>{props.country},</div>
                    <div className={styles.city}>{props.city}</div>
                </div>
            </div>
        </li>
    );
}