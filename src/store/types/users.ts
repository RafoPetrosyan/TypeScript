export enum UserActionType {
    FETCH_USER_REQUEST = 'FETCH_USER_REQUEST',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
    UPDATE_USER = 'UPDATE_USER',
}

export interface IUsers {
    _id: string;
    username: string;
    email: string;
    phone: number;
}

export interface UserState {
    users: IUsers[];
    dataCount: number;
    loading: boolean;
    error: null | string;
}