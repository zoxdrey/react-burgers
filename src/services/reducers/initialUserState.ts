export type TInitialUserState = {
    loginRequest: boolean,
    loginError: boolean,
    loginSuccess: boolean,

    registerRequest: boolean,
    registerError: boolean,
    registerSuccess: boolean,

    accessToken: null,
    refreshToken: null,
    user: TUser

    logoutRequest: boolean,
    logoutError: boolean,
    logoutSuccess: boolean,


    forgotPassRequest: boolean,
    forgotPassError: boolean,
    forgotPassSuccess: boolean,

    resetPassRequest: boolean,
    resetPassError: boolean,
    resetPassSuccess: boolean,

    refreshTokenRequest: boolean,
    refreshTokenError: boolean,
    refreshTokenSuccess: boolean,

    getUserInfoRequest: boolean,
    getUserInfoError: boolean,
    getUserInfoSuccess: boolean,

    updateUserInfoRequest: boolean,
    updateUserInfoInfoError: boolean,
    updateUserInfoInfoSuccess: boolean,
};

export type TUser = {
    email: string,
    name: string
}

export const initialUserState: TInitialUserState = {
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
