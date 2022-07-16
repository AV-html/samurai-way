import React from 'react';

import styles from './Users.module.css'
import {User} from './User/User';
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';
import {UserType} from '../../redux/users-reducer';


type ResponseType = {
    items: UserType[]
    totalCount: number
    error: string | null
}

export const Users: React.FC<UsersPropsType> = (props) => {

    if (props.users.length === 0) {
        axios
            .get<ResponseType>('https://social-network.samuraijs.com/api/1.0/users')
            .then((res) => props.setUsers(res.data.items))
        // any - то, что лежит в data
        // Типизировать можно в get<any>('...') ---> ResponseType
    }


    function onShowMoreClickHandler() {
        props.setUsers([
            {
                id: 0,
                name: 'Alexander V.',
                status: 'I have an idea!',
                followed: true,
                photos: {small: null, large: null},
                // uniqueUrlName: null
            },
            {
                id: 1,
                name: 'Michael S.',
                status: 'Another status...',
                followed: false,
                photos: {small: null, large: null},
                // uniqueUrlName: null
            },
            {
                id: 2,
                name: 'Bob G.',
                status: 'I came I saw I won!',
                followed: false,
                photos: {small: null, large: null},
                // uniqueUrlName: null
            }
        ])
    }

    return (
        <div className={styles.users}>
            <h2 className={styles.title}>Users</h2>
            <ul>
                {props.users.map((u) => {
                    return (
                        <User
                            key={u.id}
                            user={u}

                            changeFollow={() => props.changeFollow(u.id, !u.followed)}
                        />
                    )
                })}


            </ul>
            <div className={styles['wrap-btn']}>
                <button
                    onClick={onShowMoreClickHandler}
                    type={'button'}
                >
                    Show more
                </button>
            </div>
        </div>
    );
}