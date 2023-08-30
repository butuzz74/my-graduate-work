import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const AuthContext = React.createContext();
export const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
    const [currentUser] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        if (error !== 0) {
            toast(error);
            setError(null);
        }
    }, [error]);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.any
};
export default AuthProvider;
