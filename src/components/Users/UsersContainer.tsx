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
