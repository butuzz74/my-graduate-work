import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import localStorageService from "../../service/localStorage.service";

const ProtectedRoute = ({ component: Component, children, ...rest }) => {
    const isAccess = localStorageService.getAccessToken();
    return (
        <Route
            {...rest}
            render={(props) => {
                if (!isAccess) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/signin",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                } else if (
                    rest.admin !== undefined &&
                    !rest.admin &&
                    isAccess
                ) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
                return Component ? <Component {...props} /> : children;
            }}
        />
    );
};
ProtectedRoute.propTypes = {
    component: PropTypes.func,
    location: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default ProtectedRoute;
