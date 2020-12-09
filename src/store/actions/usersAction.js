import {
    REGISTER_USER_FAILURE,
    REGISTER_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGOUT,
    REGISTER_USER,
    LOGIN_USER,
    FACEBOOK_LOGIN
} from "../actionTypes";

export const registerUserSuccess = () => {
    return {type: REGISTER_USER_SUCCESS};
};
export const registerUserFailure = error => {
    return {type: REGISTER_USER_FAILURE, error};
};

export const registerUser = userData => {
    return {type: REGISTER_USER, userData};
};

export const loginUserSuccess = user => {
    return {type: LOGIN_USER_SUCCESS, user};
};
export const loginUserFailure = error => {
    return {type: LOGIN_USER_FAILURE, error};
};

export const loginUser = userData => {
    return {type: LOGIN_USER, userData};
};

export const logoutUser = () => {
    return {type: LOGOUT};
};

export const facebookLogin = data => {
    return {type: FACEBOOK_LOGIN, data}
};