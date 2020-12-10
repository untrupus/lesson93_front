import {
    FETCH_EVENTS,
    FETCH_EVENTS_FAILURE,
    FETCH_EVENTS_SUCCESS,
    ADD_EVENTS,
    ADD_EVENTS_FAILURE,
    DELETE_EVENT,
    DELETE_EVENT_FAILURE,
    FETCH_FRIENDS_EVENTS,
    FETCH_FRIENDS_EVENTS_FAILURE,
    FETCH_FRIENDS_EVENTS_SUCCESS
} from "../actionTypes";

export const fetchEventSuccess = value => {
    return {type: FETCH_EVENTS_SUCCESS, value};
};

export const fetchEventFailure = error => {
    return {type: FETCH_EVENTS_FAILURE, error};
};

export const fetchEvent = () => {
    return {type: FETCH_EVENTS};
};

export const addEventFailure = error => {
    return {type: ADD_EVENTS_FAILURE, error};
};

export const addEvent = eventData => {
    return {type: ADD_EVENTS, eventData};
};

export const deleteEventFailure = error => {
    return {type: DELETE_EVENT_FAILURE, error};
};

export const deleteEvent = eventId => {
    return {type: DELETE_EVENT, eventId};
};

export const fetchFriendsEventsSuccess = value => {
    return {type:FETCH_FRIENDS_EVENTS_SUCCESS, value};
};

export const fetchFriendsEventsFailure = error => {
    return {type: FETCH_FRIENDS_EVENTS_FAILURE, error};
};

export const fetchFriendsEvents = (id) => {
    return {type: FETCH_FRIENDS_EVENTS, id};
};