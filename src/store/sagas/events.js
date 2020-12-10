import axios from "../../axiosAPI";
import {push} from "connected-react-router";
import {put} from "redux-saga/effects";

import {
    addEventFailure,
    fetchEventFailure, fetchEventSuccess, deleteEventFailure
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
        yield put(push("/"));
    } catch (e) {
        yield put(addEventFailure(e.response.data));
    }
}

export function* deleteEventSaga(id) {
    try {
        yield axios.delete("/events/" + id.eventId);
        yield put(push("/"));
    } catch (e) {
        yield put(deleteEventFailure(e.response.data));
    }
}

