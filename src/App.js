import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

const App = () => {
    return (
        <conteiner>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </conteiner>
    );
};

export default App;

/**
 * 참고 react router
 *
 * https://reactrouter.com/
 * https://goddaehee.tistory.com/305
 */
