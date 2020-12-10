import axios from "../../axiosAPI";
import {put} from "redux-saga/effects";

import {
    addFriendFailure, deleteFriendFailure,
    fetchFriendsFailure, fetchFriendsSuccess,
    fetchMyFriendsSuccess, fetchMyFriendsFailure
} from "../actions/friendsAction";

export function* fetchFriendsSaga() {
    try {
        const response = yield axios.get("/friends");
        yield put(fetchFriendsSuccess(response.data));
    } catch (e) {
        yield put(fetchFriendsFailure(e));
    }
}

export function* addFriendSaga ({friendData}) {
    try {
        yield axios.post("/friends/", friendData);
        const response = yield axios.get("/friends");
        yield put(fetchFriendsSuccess(response.data));
    } catch(e) {
        yield put(addFriendFailure(e));
    }
}

export function* deleteFriendSaga (id) {
    try {
        yield axios.delete("/friends/" + id.id);
        const response = yield axios.get("/friends");
        yield put(fetchFriendsSuccess(response.data));
    } catch (e) {
        yield put(deleteFriendFailure(e))
    }
}

export function* fetchMyFriendsSaga() {
    try {
        const response = yield axios.get("/friends/myfriends");
        yield put(fetchMyFriendsSuccess(response.data));
    } catch (e) {
        yield put(fetchMyFriendsFailure(e));
    }
}