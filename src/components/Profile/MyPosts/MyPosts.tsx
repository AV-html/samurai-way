import React, {ChangeEvent} from 'react';
import p from './MyPosts.module.css';
import {Post} from './Post/Post';
import {MyPostsPropsType} from './MyPostContainer';


export function MyPosts(props: MyPostsPropsType) {
    const postsList = props.postsData.map(p => (
        <Post
            key={p.id}
            message={p.message}
            likesCount={p.likesCount}
        />
    ))

    const addPostHandler = () => {
        props.addPost()
        // props.dispatch(addPostActionCreator())
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostActionCreator(e.currentTarget.value)
        // props.dispatch(updateNewPostActionCreator(e.currentTarget.value))
    }

    return (
        <>
            <div className={p['new-post']}>
                <h3 className={p['new-post-title']}>My posts</h3>
                <div className={p['new-post-text']}>
                    <textarea cols={40}
                              rows={5}
                              placeholder="Your news..."
                              value={props.newPostText}
                              onChange={onPostChangeHandler}
                    />

                    <div className={p['wrap-btn']}>
                        <button onClick={addPostHandler}
                                type={'button'}>
                            Publish
                        </button>
                    </div>
                </div>
            </div>
            <ul className={p['post-list']}>
                {postsList}
            </ul>
        </>
    );
}


