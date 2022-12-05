import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./css/style.css";
import { useSelector } from "react-redux"; // 디스패치
import { ReactComponent as LogoSvg } from "../../assets/images/header/home-gitav-logo.svg";

export const Logo = () => {
    const [logoclolor, setLogocolor] = useState("#fffff");
    /** 시작 스토어 호출 */
    const isMain = useSelector((state) => state.ui.isMain);

    useEffect(() => {
        if (isMain) {
            setLogocolor("#fff");
        } else {
            setLogocolor("#000");
        }
    }, [isMain]);

    return (
        <div className="logo">
            <Link to="/" className="nav-link">
                <LogoSvg fill={logoclolor} className="logo-svg" />
            </Link>
        </div>
    );
};
