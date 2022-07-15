import React from 'react';

import styles from './Users.module.css'
import {User} from './User/User';
import {UsersPropsType} from './UsersContainer';
import {v1} from 'uuid';


export const Users: React.FC<UsersPropsType> = (props) => {


    function onShowMoreClickHandler() {
        props.setUsers([
            {
                id: v1(),
                name: 'Alexander V.',
                status: 'I have an idea!',
                isFollow: true,
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: v1(),
                name: 'Michael S.',
                status: 'Another status...',
                isFollow: false,
                location: {city: 'Los Angelos', country: 'USA'}
            },
            {
                id: v1(),
                name: 'Bob G.',
                status: 'I came I saw I won!',
                isFollow: false,
                location: {city: 'London', country: 'Great Britain'}
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
                            name={u.name}
                            country={u.location.country}
                            city={u.location.city}
                            status={u.status}
                            isFollow={u.isFollow}
                            avatar={u.avatar}

                            changeFollow={() => props.changeFollow(u.id, !u.isFollow)}
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