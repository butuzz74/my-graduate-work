const TOKEN_KEY = "jwt-token";
const REFRESH_KEY = "jwt-refresh-token";
const EXPIRES_KEY = "jwt-expires";
const LOCAL_ID = "local-id"

export const setTokens = ({localId ,refreshToken, idToken, expiresIn = 3600 }) => {
    const expiresDate = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem(LOCAL_ID, localId);
    localStorage.setItem(TOKEN_KEY, idToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
    localStorage.setItem(EXPIRES_KEY, expiresDate);
};
export const getAccessToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};
export const getRefreshToken = () => {
    return localStorage.getItem(REFRESH_KEY);
};
export const getTokenExpiresDate = () => {
    return localStorage.getItem(EXPIRES_KEY);
};
export const getCurrentUserId = () => {    
    return localStorage.getItem(LOCAL_ID);
};
export const remoteCurrentUserInfo = () => {    
    localStorage.removeItem(LOCAL_ID);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(EXPIRES_KEY);
};

const localStorageService = {
    setTokens,
    getAccessToken,
    getRefreshToken,
    getTokenExpiresDate,
    getCurrentUserId,
    remoteCurrentUserInfo
};
export default localStorageService;