import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import d from "../../assets/3d.png"


const Sliders = () => {
    var settings = {
        // dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container">
            <Slider  {...settings}>
                <div>
                    <a href="">
                        <div className="card  m-3 p-2 shadow-xl">
                            <div className="card-body">
                                <img src={d} alt="" />
                                <p className="font-bold text-2xl" >Graphic  Multimedia</p>
                            </div>
                        </div>
                    </a>

                </div>
                <div>
                <a href="">
                        <div className="card  m-3 p-2 shadow-xl">
                            <div className="card-body">
                                <img src={d} alt="" />
                                <p className="font-bold text-2xl" >Graphic  Multimedia</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                <a href="">
                        <div className="card  m-3 p-2 shadow-xl">
                            <div className="card-body">
                                <img src={d} alt="" />
                                <p className="font-bold text-2xl" >Graphic  Multimedia</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                <a href="">
                        <div className="card  m-3 p-2 shadow-xl">
                            <div className="card-body">
                                <img src={d} alt="" />
                                <p className="font-bold text-2xl" >Graphic  Multimedia</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                <a href="">
                        <div className="card  m-3 p-2 shadow-xl">
                            <div className="card-body">
                                <img src={d} alt="" />
                                <p className="font-bold text-2xl" >Graphic  Multimedia</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                <a href="">
                        <div className="card  m-3 p-2 shadow-xl">
                            <div className="card-body">
                                <img src={d} alt="" />
                                <p className="font-bold text-2xl" >Graphic  Multimedia</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                <a href="">
                        <div className="card  m-3 p-2 shadow-xl">
                            <div className="card-body">
                                <img src={d} alt="" />
                                <p className="font-bold text-2xl" >Graphic  Multimedia</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                <a href="">
                        <div className="card  m-3 p-2 shadow-xl">
                            <div className="card-body">
                                <img src={d} alt="" />
                                <p className="font-bold text-2xl" >Graphic  Multimedia</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                <a href="">
                        <div className="card  m-3 p-2 shadow-xl">
                            <div className="card-body">
                                <img src={d} alt="" />
                                <p className="font-bold text-2xl" >Graphic  Multimedia</p>
                            </div>
                        </div>
                    </a>
                </div>
       

            </Slider>
        </div>
    );
}

export default Sliders;
