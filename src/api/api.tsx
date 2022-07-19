import axios from 'axios';
import {UserType} from '../redux/users-reducer';
import {UserDataType} from '../redux/auth-reducer';


// Заменяем axios на instance
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '69c65f38-b674-456f-8e45-79c04188f163'
    }
})

export type ResGetUsersType = {
    items: UserType[]
    totalCount: number
    error: string | null
}

export type ResFollowedType = {
    resultCode: number
    messages: Array<string>
    data: object
}
export type ResAuthMeType = {
    data: UserDataType
    messages: Array<String>
    resultCode: number
}

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5): Promise<ResGetUsersType> {
        return instance.get<ResGetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    followUser(userId: number): Promise<ResFollowedType> {
        return instance.post<ResFollowedType>(`follow/${userId}`)
            .then(res => res.data)
    },
    deleteFollowUser(userId: number): Promise<ResFollowedType> {
        return instance.delete<ResFollowedType>(`follow/${userId}`)
            .then(res => res.data)
    },
    getAuthMe(): Promise<ResAuthMeType> {
        return instance.get<ResAuthMeType>('auth/me')
            .then(res => res.data)
    }
}




