import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';

import {
    changeFollow,
    changeIsFetching,
    setCurrentPage,
    setTotalCount,
    setUsers,
    UserType
} from '../../redux/users-reducer';
import React from 'react';
import axios from 'axios';
import {Users} from './Users';

import {Preloader} from '../common/Preloader/Preloader';


type ResponseType = {
    items: UserType[]
    totalCount: number
    error: string | null
}

export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.changeIsFetching(true)
        axios
            .get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true,
            })
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalCount(res.data.totalCount)
                this.props.changeIsFetching(false)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.changeIsFetching(true)
        axios
            .get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
                withCredentials: true,
            })
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.changeIsFetching(false)
            })
    };

    onShowMoreClickHandler() {
        // !!! then fix:
    };


    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader/>
                    : <Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        users={this.props.users}

                        changeFollow={this.props.changeFollow}

                        onPageChanged={this.onPageChanged}
                        onShowMoreClickHandler={this.onShowMoreClickHandler}
                    />}

            </>
        )
    }
}


export type UsersPropsType = MapStateToProps & MapDispatchToProps

type MapStateToProps = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchToProps = {
    changeFollow: (userID: number, followed: boolean) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    changeIsFetching: (isFetching: boolean) => void
}

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
})


export default connect<MapStateToProps, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {
    changeFollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    changeIsFetching
})(UsersContainer);
