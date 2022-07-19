import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {PhotosType} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {setUserProfile} from '../../redux/profile-reducer';
import {useParams} from 'react-router-dom';


type ContactsType = {
    facebook: string | null
    github: string | null
    instagram: string | null
    mainLink: string | null
    twitter: string | null
    vk: string | null
    website: string | null
    youtube: string | null
}

export type UserProfileType = {
    aboutMe: string,
    contacts: ContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotosType
    userId: number
}


export type ProfileContainerPropsType = WithRouterComponentType & {
    userId?: string
}

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.userId
        !userId && (userId = '2')

        axios.get<UserProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                    this.props.setUserProfile(res.data);
                }
            )
    }

    render() {
        return (
            <Profile {...this.props} />
        );
    }
}

export type WithRouterComponentType = MapStateToProps & MapDispatchToProps
type MapStateToProps = {
    profile: UserProfileType | null
}
type MapDispatchToProps = {
    setUserProfile: (UserProfile: UserProfileType) => void
}
const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.userProfile
})


const WithRouterComponent = (props: WithRouterComponentType) => {
    const params = useParams<'userId'>();
    return (
        <ProfileContainer
            {...props}
            userId={params.userId}
            // 33 и 34 не работают
            // 1111 - красивый
        />
    );
}


export default connect<MapStateToProps, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {setUserProfile})(WithRouterComponent)



