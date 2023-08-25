import { createContext } from "react";
import { getAccessToken } from "../service/localStorage.service";
import { useHistory } from "react-router-dom";

export const MainPageContext = createContext();

export const MainPageContextProvider = ({ children }) => {
    const history = useHistory();
    const getAccessInCart = () => {
        if (getAccessToken()) {
            history.push("./basket");
        } else {
            history.push("./signin");
        }
    };

    return (
        <MainPageContext.Provider
            value={{
                getAccessInCart
            }}
        >
            {children}
        </MainPageContext.Provider>
    );
};
