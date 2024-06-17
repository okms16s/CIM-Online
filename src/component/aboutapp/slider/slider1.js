import React from "react";
import { useLanguage } from "../../../context/LanguageProvider";
import './slider.css';

function Slide1() {
    const { lang } = useLanguage();
    return (
        <div className="container">
            <div className="bg-secondary cim-container mt-100 mt-md-50 row">
                <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 mt-5 d-flex justify-content-center align-items-center text-center order-2 order-xl-1 order-lg-2 order-md-2 order-sm-2 order-xs-2">
                    <img src='/assets/img/slider1.jpg' alt="cim" className="w-75 mx-auto" />
                </div>
                <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 mt-5 position-relative  order-1 order-xl-2 order-lg-1 order-md-1 order-sm-1 order-xs-1 d-flex">
                    <div id="cim-app-slide1" className="app-slider carousel slide" data-bs-interval="20000" data-bs-ride="carousel">
                        <div className="carousel-indicators slide1 app-slider-indicator">
                            <div data-bs-target="#cim-app-slide1" data-bs-slide-to="0" className="app-slider-subindicator active">
                                <div className="carousel-indicators-max">
                                    <span className="fa fa-circle text-primary d-flex justify-content-center align-items-center"></span>
                                    <p className="text-primary ps-1 mt-1 mb-0 d-flex justify-content-center align-items-center">1</p>
                                </div>
                                <div className="carousel-indicators-min text-primary">
                                    <p>1/4</p>
                                </div>
                            </div>
                            <div data-bs-target="#cim-app-slide1" data-bs-slide-to="1" className="app-slider-subindicator">
                                <div className="carousel-indicators-max">
                                    <span className="fa fa-circle text-primary d-flex justify-content-center align-items-center"></span>
                                    <p className="text-primary ps-1 mt-1 mb-0 d-flex justify-content-center align-items-center">2</p>
                                </div>
                                <div className="carousel-indicators-min text-primary">
                                    <p>2/4</p>
                                </div>
                            </div>
                            <div data-bs-target="#cim-app-slide1" data-bs-slide-to="2" className="app-slider-subindicator">
                                <div className="carousel-indicators-max">
                                    <span className="fa fa-circle text-primary d-flex justify-content-center align-items-center"></span>
                                    <p className="text-primary ps-1 mt-1 mb-0 d-flex justify-content-center align-items-center">3</p>
                                </div>
                                <div className="carousel-indicators-min text-primary">
                                    <p>3/4</p>
                                </div>
                            </div>
                            <div data-bs-target="#cim-app-slide1" data-bs-slide-to="3" className="app-slider-subindicator">
                                <div className="carousel-indicators-max">
                                    <span className="fa fa-circle text-primary d-flex justify-content-center align-items-center"></span>
                                    <p className="text-primary ps-1 mt-1 mb-0 d-flex justify-content-center align-items-center">4</p>
                                </div>
                                <div className="carousel-indicators-min text-primary">
                                    <p>4/4</p>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-inner">
                            {
                                lang.aboutapp.slide1.title.map((ele, idx) => {
                                    return (
                                        <div className={"carousel-item " + (idx === 0 ? 'active' : null)} key={idx}>
                                            <h2 className="text-primary fw-bold text-center">{ele}</h2>
                                            <h5 className="text-primary mt-4">{lang.aboutapp.slide1.content[idx]}</h5>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="app-slide-indicator-arrow w-100">
                            <div className="position-relative d-flex justify-content-center gap-4">
                                <button className="text-primary bg-transparent w-min-0" type="button" data-bs-target="#cim-app-slide1" data-bs-slide="prev">
                                    <span className="fa fa-arrow-left"></span>
                                </button>
                                <button className="text-primary bg-transparent w-min-0" type="button" data-bs-target="#cim-app-slide1" data-bs-slide="next">
                                    <span className="fa fa-arrow-right"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide1;