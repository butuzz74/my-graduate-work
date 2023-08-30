import axios from "axios";
import configFile from "../config/config.json";
import localStorageService from "./localStorage.service";
import authService from "./auth.service";
import { toast } from "react-toastify";

axios.defaults.baseURL = configFile.apiEndpoint;

axios.interceptors.request.use(
    async function(config) {
        const expiresDate = localStorageService.getTokenExpiresDate();
        const refreshToken = localStorageService.getRefreshToken();
        const isExpired = refreshToken && expiresDate < Date.now();

        if (configFile.isFireBase) {
            const containSlash = /\/$/gi.test(config.url);
            config.url =
                (containSlash ? config.url.slice(0, -1) : config.url) + ".json";
            if (isExpired) {
                const data = await authService.refresh();

                localStorageService.setTokens({
                    refreshToken: data.refresh_token,
                    idToken: data.id_token,
                    expiresIn: data.expires_in,
                    localId: data.user_id
                });
            }
            const accessToken = localStorageService.getAccessToken();
            if (accessToken) {
                config.params = { ...config.params, auth: accessToken };
            }
        } else {
            if (isExpired) {
                const data = await authService.refresh();
                localStorageService.setTokens(data);
            }
            const accessToken = localStorageService.getAccessToken();
            if (accessToken) {
                config.headers = {
                    ...config.headers,
                    Authorization: `Bearer ${accessToken}`
                };
            }
        }
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

function transformData(data) {
    if (data) {
        return Object.values(data);
    } else { return []; }
}
axios.interceptors.response.use(
    (res) => {
        if (configFile.isFireBase) {
            res.data = { content: transformData(res.data) };
        }
        return res;
    },
    function(error) {
        const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
        if (!expectedError) {
            toast.error("Что-то пошло не так. Попробуйте позже!");
        }
        return Promise.reject(error);
    }
);

const htppService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch
};

export default htppService;
