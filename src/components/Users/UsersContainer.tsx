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
    changeFollow: (userID: string, isFollow: boolean) => void
    setUsers: (users: Array<UserType>) => void
}


const mapStateToProps = (state: AppStateType) => ({
    users: state.usersPage.users
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeFollow: (userID: string, isFollow: boolean) => {
        dispatch(changeFollowAC(userID, isFollow))
    },
    setUsers: (users: Array<UserType>) => {
        dispatch(setUsersAC(users))
    }
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
