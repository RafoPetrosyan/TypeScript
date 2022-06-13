import { call, put, takeLatest } from 'redux-saga/effects';
import { UserActionType } from "../../types/users";
import {fetchUserSuccess, fetUserFail} from "../../actions/users";
import { userListRequest } from "../../api/users";

function* getUserList() {
    try {
        const { users, dataCount } = yield call(userListRequest);
        yield put(fetchUserSuccess(users))
     }catch (e: any) {
        yield put(fetUserFail(e.response.data.message))
    }
}

export function* watcherUsers() {
    yield takeLatest(UserActionType.FETCH_USER_REQUEST, getUserList)
}