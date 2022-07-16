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

export class Users extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);

    }

    componentDidMount() {
        if (!this.props.users.length) {
            axios
                .get<ResponseType>('https://social-network.samuraijs.com/api/1.0/users')
                .then((res) => this.props.setUsers(res.data.items))
        }
    }

    onShowMoreClickHandler = () => {
        // !!! then fix:
        if (this.props.users.length === 0) {
            axios
                .get<ResponseType>('https://social-network.samuraijs.com/api/1.0/users')
                .then((res) => this.props.setUsers(res.data.items))
            // any - то, что лежит в data
            // Типизировать можно в get<any>('...') ---> ResponseType
        }
    };

    render() {
        return (
            <div className={styles.users}>
                <h2 className={styles.title}>Users</h2>
                <ul>
                    {this.props.users.map((u) => {
                        return (
                            <User
                                key={u.id}
                                user={u}

                                changeFollow={() => this.props.changeFollow(u.id, !u.followed)}
                            />
                        )
                    })}


                </ul>
                <div className={styles['wrap-btn']}>
                    <button
                        onClick={this.onShowMoreClickHandler}
                        type={'button'}
                    >
                        Show more
                    </button>
                </div>
            </div>
        );
    }
}