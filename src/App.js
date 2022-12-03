import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Weare from "./components/Weare";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Inside from "./components/Inside";
import Contactus from "./components/Contactus";
import Portfolio from "./components/Portfolio";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/weare" element={<Weare />}></Route>
                <Route path="/contactus" element={<Contactus />}></Route>
                <Route path="/inside" element={<Inside />}></Route>
                <Route path="/portfolio" element={<Portfolio />}></Route>
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
