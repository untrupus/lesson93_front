import axios from "../../axiosAPI";
import {push} from "connected-react-router";
import {put} from "redux-saga/effects";
import {
    loginUserFailure,
    loginUserSuccess,
    registerUserFailure,
    registerUserSuccess
} from "../actions/usersAction";
import {LOGOUT_USER} from "../actionTypes";

export function* registerUserSaga({userData}) {
    try {
        yield axios.post("/users", userData);
        yield put(registerUserSuccess());
        yield put(push("/"));
    } catch (e) {
        if (e.response && e.response.data) {
            yield put(registerUserFailure(e.response.data));
        } else {
            yield put(registerUserFailure(e));
        }
    }
}

export function* loginUserSaga({userData}) {
    try {
        const response = yield axios.post("/users/sessions", userData);
        yield put(loginUserSuccess(response.data));
        yield put(push("/"));
    } catch (e) {
        yield put(loginUserFailure(e.response.data));
    }
}

export function* facebookLoginSaga({data}) {
    try {
        const response = yield axios.post('/users/facebookLogin', data);
        yield put(loginUserSuccess(response.data));
        yield put(push('/'));
    } catch (e) {
        yield put(loginUserFailure(e.response.data));
    }
}

export function* logoutUserSaga() {
    yield axios.delete("/users/sessions");
    yield put({type: LOGOUT_USER});
    yield put(push("/"));
}