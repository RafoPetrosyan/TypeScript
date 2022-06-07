import {UserActionType, UserState} from "../../types/users";
import {UserAction} from "../../actions/users";

const initialState: UserState = {
    users: [],
    dataCount: 0,
    loading: false,
    error: null,
};

export const users = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {

        case UserActionType.FETCH_USER_REQUEST: {
            return {
                ...state,
                error: null,
                loading: true,
            }
        }

        default: {
            return state;
        }
    }
}