import React from 'react';
import {User} from './User/User';
import styles from './Users.module.css'
import {usersAPI} from '../../api/api';
import {UsersPropsType} from './UsersContainer';


type AnotherPropsType = {
    onPageChanged: (page: number) => void
}

export function Users(props: UsersPropsType & AnotherPropsType) {
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
                        props.changeFollowingProgress(u.id, true)

                        const isFollowed = !u.followed
                        if (isFollowed) {
                            // Подписаться
                            usersAPI.followUser(u.id)
                                .then((res) => {
                                    !res.resultCode && props.changeFollow(u.id, isFollowed)
                                    props.changeFollowingProgress(u.id, false)
                                })
                        } else {
                            // отписаться
                            usersAPI.deleteFollowUser(u.id)
                                .then((res) => {
                                    !res.resultCode && props.changeFollow(u.id, isFollowed)
                                    props.changeFollowingProgress(u.id, false)
                                })
                        }
                    };

                    return (
                        <User
                            key={u.id}
                            user={u}
                            followingInProgress={props.followingInProgress}

                            changeFollow={changeFollow}
                        />
                    )
                })}


            </ul>
            <div className={styles['wrap-btn']}>
                <button
                    type={'button'}
                >
                    Show more
                </button>
            </div>
        </div>
    );
}