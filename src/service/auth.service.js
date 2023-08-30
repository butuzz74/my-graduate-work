import axios from "axios";
import localStorageService from "./localStorage.service";
import configFile from "../config/config.json";

const httpAuth = axios.create({
    baseURL: configFile.apiEndpoint + "auth/",
    params: {
        key: process.env.REACT_APP_FIREBASE_KEY
    }
});

const authService = {
    register: async({ email, password, nick }) => {
        const { data } = await httpAuth.post(`signUp`, {
            email,
            password,
            nick,
            returnSecureToken: true
        });
        return data;
    },
    login: async({ email, password }) => {
        const { data } = await httpAuth.post("signIn", {
            email,
            password,
            returnSecureToken: true
        });
        return data;
    },
    refresh: async() => {
        const { data } = await httpAuth.post("token", {
            grant_type: "refresh_token",
            refresh_token: localStorageService.getRefreshToken()
        });
        return data;
    }
};

export default authService;
