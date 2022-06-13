import { all, fork } from "redux-saga/effects";
import {watcherUsers} from "./rootSagas/users";

export default function* watcherAll() {
    const sagas = [
        watcherUsers,
    ];
    yield all(sagas.map(fork));

}
