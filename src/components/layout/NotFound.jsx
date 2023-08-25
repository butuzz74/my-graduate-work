import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notfound ">
            <h3>404</h3>
            <h1> Page not found</h1>
            <p>Sorry, we could not find the page you are looking for.</p>
            <NavLink to="/" className="nav-link text-decoration-underline">
                {" "}
                <i className="bi bi-arrow-left" /> Back to home
            </NavLink>
        </div>
    );
};

export default NotFound;
