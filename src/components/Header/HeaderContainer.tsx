import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import axios from 'axios';
import {setUserData, UserDataType} from '../../redux/auth-reducer';


type ResType = {
    data: UserDataType
    messages: Array<String>
    resultCode: number
}

export class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        axios.get<ResType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((res) => {
                if (res.data.resultCode === 0) { // Если залогинены
                    const {id, login, email} = res.data.data
                    this.props.setUserData(id, login, email)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

export type HeaderPropsType = MapStateToProps & MapDispatchToProps
type MapStateToProps = {
    login?: string
    isAuth: boolean
}
type MapDispatchToProps = {
    setUserData: (id: number, login: string, email: string) => void
}

export const mapStateToProps = (state: AppStateType) => ({
    login: state.auth.data?.login,

    isAuth: state.auth.isAuth
})


export default connect<MapStateToProps, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {setUserData})(HeaderContainer);