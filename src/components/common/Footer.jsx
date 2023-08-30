import React from "react";
import SocialNets from "../socialnets/SocialNets";

const Footer = () => {
    return (
        <div className="footer py-2">
            © {new Date().getFullYear()} Copyright Text
            <SocialNets />
        </div>
    );
};

export default Footer;
