import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/profile-reducer';
import {StoreContext} from '../../../StoreContext';
import {MyPosts} from './MyPosts';


export function MyPostsContainer() {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const addPostHandler = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    const onPostChangeHandler = (text: string) => {
                        store.dispatch(updateNewPostActionCreator(text))
                    }
                    const postsData = store.getState().profilePage.postsData;
                    const newPostText = store.getState().profilePage.newPostText;

                    
                    return <MyPosts postsData={postsData} newPostText={newPostText} addPost={addPostHandler}
                                    updateNewPostActionCreator={onPostChangeHandler}/>
                }
            }
        </StoreContext.Consumer>
    )
}


