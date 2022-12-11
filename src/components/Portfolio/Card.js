import React, { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap, Circ } from "gsap";

/**

var rect = $('#container')[0].getBoundingClientRect();
var mouse = {x: 0, y: 0, moved: false};

$("#container").mousemove(function(e) {
  mouse.moved = true;
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});
 
// Ticker event will be called on every frame
TweenLite.ticker.addEventListener('tick', function(){
  if (mouse.moved){    
    parallaxIt(".slide", -100);
    parallaxIt("img", -30);
  }
  mouse.moved = false;
});

function parallaxIt(target, movement) {
  TweenMax.to(target, 0.5, {
    x: (mouse.x - rect.width / 2) / rect.width * movement,
    y: (mouse.y - rect.height / 2) / rect.height * movement
  });
}

$(window).on('resize scroll', function(){
  rect = $('#container')[0].getBoundingClientRect();
})

 */
const Card = () => {
    const Scale = useRef(null);
    const [t1] = useState(gsap.timeline({ paused: true, reversed: true }));
    useLayoutEffect(() => {
        const imgcon = Scale.current.querySelector(".img-con");

        t1.to(imgcon, {
            scale: 1.3,
            duration: 0.5,
            ease: Circ.easeInOut,
        });
    }, [t1]);

    const onMueseUpHandler = (e) => {
        if (e.type === "click") {
            t1.play();
        } else if (e.type === "mouseover") {
            t1.play();
        } else if (e.type === "mouseout") {
            t1.reverse();
        }
        //t1.reversed() ? t1.play() : t1.reverse();
    };

    return (
        <div
            ref={Scale}
            className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb50_30"
            onMouseOut={onMueseUpHandler}
            onClick={onMueseUpHandler}
            onMouseOver={onMueseUpHandler}
        >
            <div className="card d-flex">
                <div className="card-top cp overflow-hidden">
                    <Link to="#">
                        <img
                            src={require("../../assets/images/portfolio/uniq.png")}
                            alt=""
                            className="img-con card-img-top img-fluid"
                        />
                    </Link>
                </div>

                <Link to="#">
                    <div className="card-body">
                        <h6 className="card-title f_we6">유니클로 2022</h6>
                        <p className="card-text fs_13 fc0">광고, 웹</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};
export default Card;
