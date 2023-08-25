import React, { createContext } from "react";
import PropTypes from "prop-types";
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
MainPageContextProvider.propTypes = {
    children: PropTypes.any
};
