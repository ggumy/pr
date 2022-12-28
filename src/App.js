import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux"; // 디스패치

import "./assets/css/style.css";

import { ScrolltoTop, NotFound, PageLoading } from "./components/Tools";
import Header from "./components/Header";
import Home from "./components/Home";
import Weare from "./components/Weare";
import Footer from "./components/Footer";
import { Inside, InsideView } from "./components/Inside";
import Contactus from "./components/Contactus";
import { Portfolio, PortfolioView } from "./components/Portfolio";
import Andproject from "./components/Portfolio/Andproject";

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
    // const isPageLoad = useSelector((state) => state.ui.isPageLoad);
    Init();
    /*
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        if (isPageLoad) {
            dispatch(actions.setPageLoading(false));
        } else {
            dispatch(actions.setPageLoading(false));
        }
    }, [isPageLoad]);
    */

    return (
        <Router>
            <PageLoading />
            <ScrolltoTop />
            <Header />
            <Routes>
                <Route index path="/" element={<Home />}></Route>
                <Route path="/weare" element={<Weare />}></Route>
                <Route path="/contactus" element={<Contactus />}></Route>
                <Route path="/inside" element={<Inside />}></Route>
                <Route path="/inside/view/:id" element={<InsideView />}></Route>
                <Route path="/portfolio" element={<Portfolio />}></Route>
                <Route
                    path="/portfolio/view/:view_id"
                    element={<PortfolioView />}
                ></Route>
                <Route
                    path="/portfolio/andproject"
                    element={<Andproject />}
                ></Route>

                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;

/**
 * 참고 react router
 *
 * https://reactrouter.com/
 * https://goddaehee.tistory.com/305
 */
