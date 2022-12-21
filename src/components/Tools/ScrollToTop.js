import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const location = useLocation();
    const [route, setRoute] = useState({
        to: location.pathname,
        from: location.pathname, //--> previous pathname
    });
    const { from } = route;
    useEffect(() => {
        // 이전 경로 저장 실질적으로 이 부분은 필요없음 document.body <-- body를 최상위로 올리면 됨.
        setRoute((prev) => ({ to: location.pathname, from: prev.to }));

        if (from !== location.pathname) {
            document.body.scrollTo(0, 0); // 결국 상단은 body가 움직인거임
        }
    }, [location, from]);

    return;
};

export default ScrollToTop;
