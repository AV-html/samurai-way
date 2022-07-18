import {connect} from 'react-redux';
import {Users} from './Users';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {changeFollowAC, setCurrentPageAC, setTotalCountAC, setUsersAC, UserType} from '../../redux/users-reducer';


export type UsersPropsType = MapStateToProps & MapDispatchToProps

type MapStateToProps = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchToProps = {
    changeFollow: (userID: number, followed: boolean) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
}

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
})
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({
    changeFollow: (userID: number, followed: boolean) => {
        dispatch(changeFollowAC(userID, followed))
    },
    setUsers: (users: Array<UserType>) => {
        dispatch(setUsersAC(users))
    },
    setCurrentPage: (currentPage: number) => {
        dispatch(setCurrentPageAC(currentPage))
    },
    setTotalCount: (totalUsersCount: number) => {
        dispatch(setTotalCountAC(totalUsersCount))
    }
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
