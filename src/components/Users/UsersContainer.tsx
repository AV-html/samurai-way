import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';

import {
    changeFollow, changeFollowingProgress,
    changeIsFetching,
    setCurrentPage,
    setTotalCount,
    setUsers,
    UserType
} from '../../redux/users-reducer';
import React from 'react';
import {Users} from './Users';

import {Preloader} from '../common/Preloader/Preloader';
import {usersAPI} from '../../api/api';


export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.changeIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then((res) => {
                this.props.setUsers(res.items)
                this.props.setTotalCount(res.totalCount)
                this.props.changeIsFetching(false)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.changeIsFetching(true)

        usersAPI.getUsers(page, this.props.pageSize)
            .then((res) => {
                this.props.setUsers(res.items)
                this.props.changeIsFetching(false)
            })
    };


    render() {
        return (
            <>
                {
                    this.props.isFetching ?
                        <Preloader/>
                        : <Users
                            {...this.props}
                            onPageChanged={this.onPageChanged}
                        />
                }

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
    followingInProgress: Array<number>

}
type MapDispatchToProps = {
    changeFollow: (userID: number, followed: boolean) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    changeIsFetching: (isFetching: boolean) => void
    changeFollowingProgress: (userId: number, isFetching: boolean) => void
}

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
})


export default connect<MapStateToProps, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {
    changeFollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    changeIsFetching,
    changeFollowingProgress
})(UsersContainer);
