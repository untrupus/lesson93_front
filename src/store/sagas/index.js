import {takeEvery} from 'redux-saga/effects';
import {facebookLoginSaga, loginUserSaga, logoutUserSaga, registerUserSaga} from "./users";
import {fetchEventsSaga, addEventSaga, deleteEventSaga, fetchFriendsEventsSaga} from "./events";
import {addFriendSaga, deleteFriendSaga, fetchFriendsSaga, fetchMyFriendsSaga} from "./friends";
import {
    REGISTER_USER,
    LOGIN_USER,
    FACEBOOK_LOGIN,
    LOGOUT,

    FETCH_EVENTS, ADD_EVENTS,
    DELETE_EVENT,

    FETCH_FRIENDS,
    ADD_FRIEND,
    DELETE_FRIEND,

    FETCH_MY_FRIENDS,
    FETCH_FRIENDS_EVENTS
} from "../actionTypes";

export function* rootSaga() {
    yield takeEvery(REGISTER_USER, registerUserSaga);
    yield takeEvery(LOGIN_USER, loginUserSaga);
    yield takeEvery(FACEBOOK_LOGIN, facebookLoginSaga);
    yield takeEvery(LOGOUT, logoutUserSaga);

    yield takeEvery(FETCH_EVENTS, fetchEventsSaga);
    yield takeEvery(ADD_EVENTS, addEventSaga);
    yield takeEvery(DELETE_EVENT, deleteEventSaga);

    yield takeEvery(FETCH_FRIENDS, fetchFriendsSaga);
    yield takeEvery(ADD_FRIEND, addFriendSaga);
    yield takeEvery(DELETE_FRIEND, deleteFriendSaga);

    yield takeEvery(FETCH_MY_FRIENDS, fetchMyFriendsSaga);
    yield takeEvery(FETCH_FRIENDS_EVENTS, fetchFriendsEventsSaga);
}