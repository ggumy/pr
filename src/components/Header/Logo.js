import React from "react";

import "./css/style.css";
import gnbLogo from "../../assets/images/header/home-gitav-logo.svg";

export const Logo = () => {
    return (
        <div className="logo">
            <img src={gnbLogo} alt="gitav logo" className="logo-svg" />
        </div>
    );
};
