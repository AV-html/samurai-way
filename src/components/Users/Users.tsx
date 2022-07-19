import React from 'react';
import {User} from './User/User';
import styles from './Users.module.css'
import {UserType} from '../../redux/users-reducer';
import {usersAPI} from '../../api/api';

type PropsType = {
    totalUsersCount: number,
    pageSize: number
    currentPage: number
    users: Array<UserType>

    onPageChanged: (page: number) => void
    onShowMoreClickHandler: () => void
    changeFollow: (id: number, followed: boolean) => void
}


export function Users(props: PropsType) {
    // pagination
    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages: Array<number> = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    const currentPage = props.currentPage;
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
                                   onClick={() => props.onPageChanged(page)}
                    >
                        {page}
                    </button>
                })}
            </div>
            <ul>
                {props.users.map((u) => {

                    const changeFollow = () => {
                        const isFollowed = !u.followed
                        if (isFollowed) {
                            // Подписаться
                            usersAPI.followUser(u.id)
                                .then((res) => {
                                    !res.resultCode && props.changeFollow(u.id, isFollowed)
                                })
                        } else {
                            // отписаться
                            usersAPI.deleteFollowUser(u.id)
                                .then((res) => {
                                    !res.resultCode && props.changeFollow(u.id, isFollowed)
                                })
                        }

                    };

                    return (
                        <User
                            key={u.id}
                            user={u}

                            changeFollow={changeFollow}
                        />
                    )
                })}


            </ul>
            <div className={styles['wrap-btn']}>
                <button
                    onClick={props.onShowMoreClickHandler}
                    type={'button'}
                >
                    Show more
                </button>
            </div>
        </div>
    );
}