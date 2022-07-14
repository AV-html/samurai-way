import {addPostActionCreator, PostsDataType, updateNewPostActionCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';


type MapStateToProps = {
    postsData: PostsDataType
    newPostText: string
}

type MapDispatchToProps = {
    addPost: () => void
    updateNewPostActionCreator: (text: string) => void
}

export type MyPostsPropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostActionCreator: (text: string) => {
            dispatch(updateNewPostActionCreator(text))
        }
    }
};


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


