import React from 'react';
import p from './MyPosts.module.css';
import {Post} from './Post/Post';

export function MyPosts() {
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
                <Post/>

                <Post/>

                <Post/>
            </ul>
        </>
    );
}