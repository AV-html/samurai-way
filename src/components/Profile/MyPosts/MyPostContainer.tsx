import {
    addPost,
    updateNewPost,
    PostType

} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';


type MapStateToProps = {
    postsData: Array<PostType>
    newPostText: string
}

type MapDispatchToProps = {
    addPost: () => void
    updateNewPost: (text: string) => void
}

export type MyPostsPropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
};

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     return {
//         addPost: () => {
//             dispatch(addPost())
//         },
//         updateNewPostActionCreator: (text: string) => {
//             dispatch(updateNewPost(text))
//         }
//     }
// };


export const MyPostsContainer = connect<MapStateToProps, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {
    addPost,
    updateNewPost
})(MyPosts);


