import {connect} from 'react-redux';
import {Users} from './Users';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {changeFollowAC, setUsersAC, UserType} from '../../redux/users-reducer';


export type UsersPropsType = MapStateToProps & MapDispatchToProps

type MapStateToProps = {
    users: Array<UserType>
}
type MapDispatchToProps = {
    changeFollow: (userID: number, followed: boolean) => void
    setUsers: (users: Array<UserType>) => void
}


const mapStateToProps = (state: AppStateType) => ({
    users: state.usersPage.users
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeFollow: (userID: number, followed: boolean) => {
        dispatch(changeFollowAC(userID, followed))
    },
    setUsers: (users: Array<UserType>) => {
        dispatch(setUsersAC(users))
    }
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
