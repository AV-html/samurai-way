import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {PhotosType} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {setUserProfile} from '../../redux/profile-reducer';


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


export class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get<UserProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {
                    this.props.setUserProfile(res.data);
                }
            )
    }

    render() {
        console.log(this.props);
        return (

            <Profile {...this.props} />
        );
    }
}

export type ProfileContainerPropsType = MapStateToProps & MapDispatchToProps
type MapStateToProps = {
    profile: UserProfileType | null
}
type MapDispatchToProps = {
    setUserProfile: (UserProfile: UserProfileType) => void
}
const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    profile: state.profilePage.userProfile
})

export default connect<MapStateToProps, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {setUserProfile})(ProfileContainer)