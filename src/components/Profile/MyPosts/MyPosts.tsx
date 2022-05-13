import React from 'react';
import p from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostsDataType} from '../../../index';


type PropsType = {
    postsData: PostsDataType
}

export function MyPosts(props: PropsType) {
    const postsList = props.postsData.map(p => (
        <Post
            message={p.message}
            likesCount={p.likesCount}
        />
    ))

    return (
        <>
            <div className={p['new-post']}>
                <h3 className={p['new-post-title']}>My posts</h3>
                <div className={p['new-post-text']}>
                    <textarea cols={40} rows={5} placeholder="Your news..."></textarea>
                    <div className={p['wrap-btn']}>
                        <button type={'button'}>Publish</button>
                    </div>
                </div>


            </div>
            <ul className={p['post-list']}>
                {postsList}
            </ul>
        </>
    );
}