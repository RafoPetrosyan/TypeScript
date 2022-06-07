import { UserActionType, IUsers } from "../types/users";
import { Action, ActionWithPayload, createAction } from "../actions";

export type FetchUserRequest = Action<UserActionType.FETCH_USER_REQUEST>;
export type FetchUserSuccess = ActionWithPayload<UserActionType.FETCH_USER_SUCCESS, IUsers[]>;
export type FetchUserError = ActionWithPayload<UserActionType.FETCH_USER_ERROR, any>;

export const fetchUserRequest = (): FetchUserRequest => {
    return createAction(UserActionType.FETCH_USER_REQUEST);
};

export const fetchUserSuccess = (userArray: IUsers[]): FetchUserSuccess => {
    return createAction (
        UserActionType.FETCH_USER_SUCCESS,
        userArray
    )
};

export type UserAction =
    | FetchUserRequest
    | FetchUserSuccess
    | FetchUserError;