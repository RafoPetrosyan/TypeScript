import {IUsers, UserActionType} from "../types/users";
import {Action, ActionWithPayload, createAction} from "../actions";

export type FetchUserRequest = Action<UserActionType.FETCH_USER_REQUEST>;
export type FetchUserSuccess = ActionWithPayload<UserActionType.FETCH_USER_SUCCESS, IUsers[]>;
export type FetchUserError = ActionWithPayload<UserActionType.FETCH_USER_ERROR, any>;

// export const fetchUserRequest = (): FetchUserRequest => {
//     return createAction(UserActionType.FETCH_USER_REQUEST);
// };

export const fetchUserRequest = () => {
    return { type: UserActionType.FETCH_USER_REQUEST }
}

// export const fetchUserSuccess = (userArray: IUsers[]): FetchUserSuccess => {
//     return createAction (
//         UserActionType.FETCH_USER_SUCCESS,
//         userArray
//     )
// };

export const fetchUserSuccess = (userArray: IUsers[]) => {
    return { type: UserActionType.FETCH_USER_SUCCESS, payload: userArray }
};

export const fetUserFail = (errorMessage: any): FetchUserError => {
    return createAction(
        UserActionType.FETCH_USER_ERROR,
        errorMessage
    )
}

export type UserAction =
    | FetchUserRequest
    | FetchUserSuccess
    | FetchUserError;