import React, {ChangeEvent} from 'react';
import p from './MyPosts.module.css';
import {Post} from './Post/Post';
import {ActionsType, PostsDataType} from '../../../redux/store';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profile-reducer';


type PropsType = {
    postsData: PostsDataType
    newPostText: string
    dispatch: (action: ActionsType) => void
}


export function MyPosts(props: PropsType) {
    const postsList = props.postsData.map(p => (
        <Post
            message={p.message}
            likesCount={p.likesCount}
        />
    ))

    const addPostHandler = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {

        props.dispatch(updateNewPostActionCreator(e.currentTarget.value))

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


