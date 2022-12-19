import React, { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap, Expo } from "gsap";

const Card = (props) => {
    const { id } = props;
    const Scale = useRef(null);
    const [t1, setT1] = useState(false);
    const [rect, setRect] = useState(false);
    const [mouse] = useState({ x: 0, y: 0, moved: false });
    const url = `/inside/view/${id}`;

    useLayoutEffect(() => {
        const imgcon = Scale.current.querySelector(".img-con");
        setRect(Scale.current.getBoundingClientRect());

        if (t1) {
            gsap.to(imgcon, {
                scale: 1.2,
                duration: 2,
                ease: Expo.easeOut,
            });
        } else {
            gsap.to(imgcon, {
                scale: 1,
                duration: 2,
                ease: Expo.easeOut,
            });
        }
    }, [t1]);

    function parallaxIt(target, movement) {
        let mX = Math.round(
            ((mouse.x - rect.width / 2) / rect.width) * movement
        );
        mX = mX > -10 ? mX : -10;
        let mY = Math.round(
            ((mouse.y - rect.height / 2) / rect.height) * movement
        );
        mY = mY > -10 ? mY : -10;

        gsap.to(target, {
            ease: Expo.easeOut,
            duration: 1,
            x: mX,
            y: mY,
        });
    }

    const onMueseUpHandler = (e) => {
        const img = e.currentTarget.querySelector(".img-con");
        if (e.type === "click") {
            setT1(true);
        } else if (e.type === "mouseover") {
            setT1(true);
        } else if (e.type === "mouseout") {
            gsap.to(img, {
                duration: 1,
                x: 0,
                y: 0,
                ease: Expo.easeOut,
            });
            mouse.moved = false;
            setT1(false);
        }
    };

    const onMouseMoveHandler = (e) => {
        mouse.moved = true;
        const img = e.currentTarget.querySelector(".img-con");
        const t = e;
        mouse.x = t.clientX - rect.left;
        mouse.y = t.clientY - rect.top;
        if (mouse.moved) {
            parallaxIt(img, -20);
        }
        mouse.moved = false;
    };

    return (
        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb50_30">
            <div className="g-card d-flex flex-column">
                <div
                    ref={Scale}
                    className="g-card-top cp overflow-hidden"
                    onMouseOut={onMueseUpHandler}
                    onClick={onMueseUpHandler}
                    onMouseOver={onMueseUpHandler}
                    onMouseMove={onMouseMoveHandler}
                >
                    <Link to={url}>
                        <img
                            src={require("../../assets/images/portfolio/uniq.png")}
                            alt=""
                            className="img-con img-fluid"
                        />
                    </Link>
                </div>

                <div className="g-card-body mt10">
                    <Link to={url}>
                        <h6 className="card-title f_we6">
                            유니클로 2022 퍼블리싱
                        </h6>
                        <p className="card-text fs_13 fc0">Weekly</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Card;
