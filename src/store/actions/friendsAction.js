import {
    FETCH_FRIENDS,
    FETCH_FRIENDS_FAILURE,
    FETCH_FRIENDS_SUCCESS,
    ADD_FRIEND,
    ADD_FRIEND_FAILURE,
    DELETE_FRIEND,
    DELETE_FRIEND_FAILURE,
    FETCH_MY_FRIENDS,
    FETCH_MY_FRIENDS_FAILURE,
    FETCH_MY_FRIENDS_SUCCESS
} from "../actionTypes";

export const fetchFriendsSuccess = value => {
    return {type: FETCH_FRIENDS_SUCCESS, value};
};

export const fetchFriendsFailure = error => {
    return {type: FETCH_FRIENDS_FAILURE, error};
};

export const fetchFriends = () => {
    return {type: FETCH_FRIENDS};
};

export const addFriendFailure = error => {
    return {type: ADD_FRIEND_FAILURE, error};
};

export const deleteFriendFailure = error => {
    return {type: DELETE_FRIEND_FAILURE, error};
};

export const deleteFriend = id => {
    return {type: DELETE_FRIEND, id};
};

export const addFriend = friendData => {
    return {type: ADD_FRIEND, friendData};
};

export const fetchMyFriendsSuccess = (value) => {
    return {type: FETCH_MY_FRIENDS_SUCCESS, value};
};

export const fetchMyFriendsFailure = error => {
    return {type: FETCH_MY_FRIENDS_FAILURE, error};
};

export const fetchMyFriends = () => {
    return {type: FETCH_MY_FRIENDS};
};