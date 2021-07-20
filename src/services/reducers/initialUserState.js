export const initialUserState = {
    loginRequest: false,
    loginError: false,
    loginSuccess: false,

    registerRequest: false,
    registerError: false,
    registerSuccess: false,

    accessToken: null,
    refreshToken: null,
    user: {
        email: '',
        name: ''
    },

    logoutRequest: false,
    logoutError: false,
    logoutSuccess: false,


    forgotPassRequest: false,
    forgotPassError: false,
    forgotPassSuccess: false,

    resetPassRequest: false,
    resetPassError: false,
    resetPassSuccess: false,

    refreshTokenRequest: false,
    refreshTokenError: false,
    refreshTokenSuccess: false,

    getUserInfoRequest: false,
    getUserInfoError: false,
    getUserInfoSuccess: false,

    updateUserInfoRequest: false,
    updateUserInfoInfoError: false,
    updateUserInfoInfoSuccess: false,
};
