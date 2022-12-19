import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux"; // 디스패치

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Weare from "./components/Weare";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { Inside, InsideView } from "./components/Inside";
import Contactus from "./components/Contactus";
import { Portfolio, PortfolioView } from "./components/Portfolio";
import Andproject from "./components/Portfolio/Andproject";

// import { PageChangeMotion } from "./components/Motion";

const Init = () => {
    const isMain = useSelector((state) => state.ui.isMain);
    useEffect(() => {
        if (isMain) {
            document.body.style = "background-color: #111;";
        } else {
            document.body.style = "background-color: #fff;";
        }
    }, [isMain]);
};

const App = () => {
    Init();
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/weare" element={<Weare />}></Route>
                <Route path="/contactus" element={<Contactus />}></Route>
                <Route path="/inside" element={<Inside />}></Route>
                <Route path="/inside/view/:id" element={<InsideView />}></Route>
                <Route path="/portfolio" element={<Portfolio />}></Route>
                <Route
                    path="/portfolio/view/:id"
                    element={<PortfolioView />}
                ></Route>
                <Route
                    path="/portfolio/andproject"
                    element={<Andproject />}
                ></Route>

                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;

/**
 * 참고 react router
 *
 * https://reactrouter.com/
 * https://goddaehee.tistory.com/305
 */
