import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {setUserData} from '../../redux/auth-reducer';
import {usersAPI} from '../../api/api';


export class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        usersAPI.getAuthMe()
            .then((res) => {
                if (res.resultCode === 0) { // Если залогинены
                    const {id, login, email} = res.data
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