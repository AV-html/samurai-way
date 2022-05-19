import React from 'react';
import p from './MyPosts.module.css';
import {Post} from './Post/Post';
import {ProfilePageType} from '../../../redux/state';


type PropsType = {
    state: ProfilePageType
}

export function MyPosts(props: PropsType) {
    const postsList = props.state.postsData.map(p => (
        <Post
            message={p.message}
            likesCount={p.likesCount}
        />
    ))

    const newPostElement: React.LegacyRef<HTMLTextAreaElement> = React.createRef()
    const addPostHandler = () => {
        let text = newPostElement.current?.value;
        alert(text)
    }

    return (
        <>
            <div className={p['new-post']}>
                <h3 className={p['new-post-title']}>My posts</h3>
                <div className={p['new-post-text']}>
                    <textarea ref={newPostElement}
                              cols={40}
                              rows={5}
                              placeholder="Your news...">
                    </textarea>

                    <div className={p['wrap-btn']}>
                        <button onClick={addPostHandler} type={'button'}>Publish
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