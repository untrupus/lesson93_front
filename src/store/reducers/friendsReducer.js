import {
    FETCH_FRIENDS_FAILURE,
    FETCH_FRIENDS_SUCCESS,
    ADD_FRIEND_FAILURE,
    DELETE_FRIEND_FAILURE,
    FETCH_MY_FRIENDS_FAILURE,
    FETCH_MY_FRIENDS_SUCCESS
} from "../actionTypes";

const initialState = {
    friends: [],
    myFriends: [],
    fetchFriendsError: null,
    fetchMyFriendsError: null,
    addFriendsError: null,
    deleteFriendsError: null,

};

const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FRIEND_FAILURE:
            return {...state, addFriendsError: action.error};
        case DELETE_FRIEND_FAILURE:
            return {...state, deleteFriendsError: action.error};
        case FETCH_FRIENDS_SUCCESS:
            return {...state, friends: action.value};
        case FETCH_FRIENDS_FAILURE:
            return {...state, fetchFriendsError: action.error};
        case FETCH_MY_FRIENDS_SUCCESS:
            return {...state, myFriends: action.value};
        case FETCH_MY_FRIENDS_FAILURE:
            return {...state, fetchMyFriendsError: action.error};
        default:
            return state;
    }
};

export default friendsReducer;