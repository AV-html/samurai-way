import React from 'react';
import p from './MyPosts.module.css';
import {Post} from './Post/Post';


type PostsDataType = Array<PostType>
type PostType = {
    id: string
    message: string
    likesCount: number
}

const postsData: PostsDataType = [
    {
        id: '1',
        message: '\'Doloremque dolorum, exercitationem libero nam odit porro quaerat, sequi similique tempore? Cumque, illum, optio.\'!',
        likesCount: 15
    },
    {
        id: '2',
        message: 'Consectetur adipisicing elit. Alias distinctio eius est laborum magni rerum!',
        likesCount: 20
    },
    {
        id: '3',
        message: 'Adipisci aut culpa doloremque dolorum, exercitationem libero nam odit porro quaerat sequ',
        likesCount: 1
    }
]


export function MyPosts() {
    const postsList = postsData.map(p => (
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