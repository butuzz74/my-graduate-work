import { createSlice } from "@reduxjs/toolkit";
import localStorageService from "../service/localStorage.service";
import authService from "../service/auth.service";
import userService from "../service/user.service";

const initialState = localStorageService.getAccessToken()
    ? {
        entities: null,
        isLoading: true,
        error: null,
        auth: { userId: localStorageService.getCurrentUserId() },
        isLoggedIn: true,
        dataLoaded: false
    }
    : {
        entities: null,
        isLoading: false,
        error: null,
        auth: null,
        isLoggedIn: false,
        dataLoaded: false
    };

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        usersRequested: (state) => {
            state.isLoading = true;
        },
        usersReceived: (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        usersRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        usersLoggedOut: (state) => {
            state.entities = null;
            state.isLoggedIn = false;
            state.auth = null;
            state.dataLoaded = false;
        },
        authRequested: (state) => {
            state.error = null;
        },
        authRequestSuccess: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        currentUserCreated: (state, action) => {
            state.entities = action.payload;
        }
    }
});

const { reducer: usersReducer, actions } = usersSlice;
const {
    usersLoggedOut,
    authRequested,
    authRequestSuccess,
    authRequestFailed,
    currentUserCreated
} = actions;

export const signUp =
    ({ email, password, nick, ...rest }) =>
        async(dispatch) => {
            dispatch(authRequested());
            try {
                const data = await authService.register({ email, password, nick });
                localStorageService.setTokens(data);
                dispatch(authRequestSuccess({ userId: data.userId }));
                const content = await userService.get(data.userId);
                // const content = await userService.create({
                //   _id: data.userId,
                //   email,
                //   password,
                //   nick,
                //   ...rest,
                // });
                dispatch(currentUserCreated(content));
            } catch (error) {
                dispatch(authRequestFailed(error.message));
                const { code, message } = error.response.data.error;
                if (code === 400) {
                    if (message === "EMAIL_EXISTS") {
                        const errorObject = {
                            email: "Пользователь с таким email уже существует"
                        };
                        throw errorObject;
                    }
                }
            }
        };

export const signIn =
    ({ email, password }) =>
        async(dispatch) => {
            dispatch(authRequested());
            try {
                const data = await authService.login({ email, password });
                localStorageService.setTokens(data);
                dispatch(authRequestSuccess({ userId: data.userId }));
                const content = await userService.getCurrentUser();
                dispatch(currentUserCreated(content));
            } catch (error) {
                dispatch(authRequestFailed(error.message));
                const { code, message } = error.response.data.error;
                if (code === 400) {
                    if (message === "EMAIL_NOT_FOUND") {
                        const errorObject = {
                            email: "Пользователь с таким email не зарегестрирован. Зарегистрируйтесь!"
                        };
                        throw errorObject;
                    }
                    if (message === "INVALID_PASSWORD") {
                        const errorObject = {
                            password: "Не правильный пароль!"
                        };
                        throw errorObject;
                    }
                }
            }
        };
export const getCurrentUser = () => async(dispatch) => {
    dispatch(authRequested());
    try {
        const content = await userService.getCurrentUser();
        dispatch(currentUserCreated(content));
    } catch (error) {
        dispatch(authRequestFailed(error.message));
    }
};

export const updateCurrentUser = (id, data) => async(dispatch) => {
    dispatch(authRequested());
    try {
        const content = await userService.update(id, data);
        dispatch(currentUserCreated(content));
    } catch (error) {
        dispatch(authRequestFailed(error.message));
    }
};

export const logOut = () => (dispatch) => {
    localStorageService.remoteCurrentUserInfo();
    dispatch(usersLoggedOut());
};

export const getIsLoggedIn = () => (state) => state.users.entities;
export default usersReducer;
