import axios from "../../axiosAPI";
import {put} from "redux-saga/effects";

import {
    addEventFailure,
    fetchEventFailure, fetchEventSuccess, deleteEventFailure,
    fetchFriendsEventsSuccess, fetchFriendsEventsFailure
} from "../actions/eventsAction";

export function* fetchEventsSaga() {
    try {
        const response = yield axios.get("/events");
        yield put(fetchEventSuccess(response.data));
    } catch (e) {
        yield put(fetchEventFailure(e.response.data))
    }
}

export function* addEventSaga({eventData}) {
    try {
        yield axios.post("/events", eventData);
    } catch (e) {
        yield put(addEventFailure(e.response.data));
    }
}

export function* deleteEventSaga(id) {
    try {
        yield axios.delete("/events/" + id.eventId);
        const response = yield axios.get("/events");
        yield put(fetchEventSuccess(response.data));
    } catch (e) {
        yield put(deleteEventFailure(e.response.data));
    }
}

export function* fetchFriendsEventsSaga({id}) {
    try {
        const response = yield axios.get("/events/" + id);
        console.log(response);
        yield put(fetchFriendsEventsSuccess(response.data));
    } catch (e) {
        yield put(fetchFriendsEventsFailure(e.response.data))
    }
}
