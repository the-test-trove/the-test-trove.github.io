/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import { speakers } from '../Constants/Constants'
import adithya from '../../assets/images/uploads/speaker/adithya.jpg'
import ap from '../../assets/images/uploads/speaker/AP.jpg'
import aman from '../../assets/images/uploads/speaker/aman.jpeg'
import ayush from '../../assets/images/uploads/speaker/ayush.jpeg'
import chetan from '../../assets/images/uploads/speaker/chetan.png'

import './Speakers.css'

export default function Speakers() {
    return (
        <section>
            <div className="extra-container">
                <div className="speaker-slider__tittle">
                    <h1>Speakers</h1>
                </div>

            </div>
            <div className="container">
                <div className="speaker-slider-area">
                    <div className="speaker-slider__arrow speaker-slider__arrow--up"><i class="fa fa-angle-up"></i></div>
                    <div className="speaker-slider__arrow speaker-slider__arrow--down"><i class="fa fa-angle-down"></i></div>
                    <div className="speaker-slider">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 speaker-align">
                                <a href="https://www.linkedin.com/in/rajshekhar-ap-ab657410/">
                                    <img src={ap} alt="experience3" style={{ cursor: 'pointer' }} />
                                </a>
                                <h5>AP</h5>
                            </div>
                            <div className="col-lg-3 col-sm-6 speaker-align">
                                <a href="https://www.linkedin.com/in/adiiikris/">
                                    <img src={adithya} alt="experience4" style={{ cursor: 'pointer' }} />
                                </a>
                                <h5>Adithya Krishna Sharma</h5>
                            </div>
                            <br/>
                            <div className="col-lg-3 col-sm-6 speaker-align">
                                <a href="https://www.linkedin.com/in/amaan-aziz/">
                                    <img src={aman} alt="experience4" style={{ cursor: 'pointer' }} />
                                </a>
                                <h5>Tarique Aman Aziz</h5>
                            </div>
                            <div className="col-lg-3 col-sm-6 speaker-align">
                                <a href="https://www.linkedin.com/in/ayush-sharma-1b7361a0/">
                                    <img src={ayush} alt="experience4" style={{ cursor: 'pointer' }} />
                                </a>
                                <h5>Ayush Sharma</h5>
                            </div>
                            <div className="col-lg-3 col-sm-6 speaker-align">
                                <a href="https://www.linkedin.com/in/chetan-yeshi-98a8ba84/">
                                    <img src={chetan} alt="experience4" style={{ cursor: 'pointer' }} />
                                </a>
                                <h5>Chetan Yeshi</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
