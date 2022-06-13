import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers";
import watcherAll from "./sagas";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watcherAll);
