import { takeEvery } from 'redux-saga/effects';
import {facebookLoginSaga, loginUserSaga, logoutUser, registerUserSaga} from "./users";
import {REGISTER_USER, LOGIN_USER, FACEBOOK_LOGIN, LOGOUT} from "../actionTypes";

export function* rootSaga() {
    yield takeEvery(REGISTER_USER, registerUserSaga);
    yield takeEvery(LOGIN_USER, loginUserSaga);
    yield takeEvery(FACEBOOK_LOGIN, facebookLoginSaga);
    yield takeEvery(LOGOUT, logoutUser);
}