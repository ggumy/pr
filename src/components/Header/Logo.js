import React from "react";
import { Link } from "react-router-dom";

import "./css/style.css";
import gnbLogo from "../../assets/images/header/home-gitav-logo.svg";

export const Logo = () => {
    return (
        <div className="logo">
            <Link to="/" className="nav-link">
                <img src={gnbLogo} alt="gitav logo" className="logo-svg" />
            </Link>
        </div>
    );
};
