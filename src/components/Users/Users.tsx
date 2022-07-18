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
    componentDidMount() {
        axios
            .get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalCount(res.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        axios
            .get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
            })
    };

    onShowMoreClickHandler() {
        // !!! then fix:
    };


    render() {
        // pagination
        const pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages: Array<number> = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        const currentPage = this.props.currentPage;
        const firstPageIdx = currentPage - 3 < 0 ? 0 : currentPage - 3
        const lastPageIdx = currentPage - 3 < 0 ? currentPage + 3 : currentPage + 2
        const slicedPages = pages.slice(firstPageIdx, lastPageIdx)

        return (
            <div className={styles.users}>
                <h2 className={styles.title}>Users</h2>

                <div className={styles.pagination}>
                    {slicedPages.map((page, i) => {


                        return <button key={i}
                                       className={page === currentPage ? `${styles.pagBtn} ${styles.selectedPage}` : styles.pagBtn}
                                       type={'button'}
                                       onClick={() => this.onPageChanged(page)}
                        >
                            {page}
                        </button>
                    })}
                </div>
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