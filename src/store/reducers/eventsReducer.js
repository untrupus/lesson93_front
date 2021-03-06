import {
    FETCH_EVENTS_FAILURE,
    FETCH_EVENTS_SUCCESS,
    ADD_EVENTS_FAILURE,
    DELETE_EVENT_FAILURE,
    FETCH_FRIENDS_EVENTS_SUCCESS
} from "../actionTypes";


const initialState = {
    events: [],
    friendsEvents: [],
    fetchEventsError: null,
    addEventsError: null,
    deleteEventError: null,

};

const eventsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_EVENTS_SUCCESS: {
            return {...state, events: action.value};
        }
        case FETCH_EVENTS_FAILURE:
            return {...state, fetchEventsError: action.error};
        case ADD_EVENTS_FAILURE:
            return {...state, addEventsError: action.error};
        case DELETE_EVENT_FAILURE:
            return {...state, deleteEventError: action.error};
        case FETCH_FRIENDS_EVENTS_SUCCESS:
            return {...state, friendsEvents: action.value};
        default:
            return state;
    }
};

export default eventsReducer;