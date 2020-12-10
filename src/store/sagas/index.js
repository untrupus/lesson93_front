import {takeEvery} from 'redux-saga/effects';
import {facebookLoginSaga, loginUserSaga, logoutUserSaga, registerUserSaga} from "./users";
import {fetchEventsSaga, addEventSaga, deleteEventSaga} from "./events";
import {
    REGISTER_USER,
    LOGIN_USER,
    FACEBOOK_LOGIN,
    LOGOUT,

    FETCH_EVENTS, ADD_EVENTS,
    DELETE_EVENT,
} from "../actionTypes";

export function* rootSaga() {
    yield takeEvery(REGISTER_USER, registerUserSaga);
    yield takeEvery(LOGIN_USER, loginUserSaga);
    yield takeEvery(FACEBOOK_LOGIN, facebookLoginSaga);
    yield takeEvery(LOGOUT, logoutUserSaga);

    yield takeEvery(FETCH_EVENTS, fetchEventsSaga);
    yield takeEvery(ADD_EVENTS, addEventSaga);
    yield takeEvery(DELETE_EVENT, deleteEventSaga);
}