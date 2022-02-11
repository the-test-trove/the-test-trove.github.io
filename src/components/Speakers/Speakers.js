/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Satyajit from '../../assets/images/uploads/speaker/Satyajit.png'
import Anjana from '../../assets/images/uploads/speaker/Anjana.png'
import Ankit from '../../assets/images/uploads/speaker/Ankit.png'
import Nitish from '../../assets/images/uploads/speaker/Nitish.png'

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
                                <a href="https://www.linkedin.com/in/satyajit-bulage-5a6928105/" target="_blank" rel="noopener noreferrer">
                                    <img src={Satyajit} alt="experience3" style={{ cursor: 'pointer' }} />
                                </a>
                                <h5>Satyajit Bulage</h5>
                            </div>
                            <div className="col-lg-3 col-sm-6 speaker-align">
                                <a href="https://www.linkedin.com/in/anjana-krishnadasan-12ba09131" target="_blank" rel="noopener noreferrer">
                                    <img src={Anjana} alt="experience4" style={{ cursor: 'pointer' }} />
                                </a>
                                <h5>Anjana Krishnadasan</h5>
                            </div>
                            <br/>
                            <div className="col-lg-3 col-sm-6 speaker-align">
                                <a href="https://www.linkedin.com/in/ankit-gadgil-42882457/" target="_blank" rel="noopener noreferrer">
                                    <img src={Ankit} alt="experience4" style={{ cursor: 'pointer' }} />
                                </a>
                                <h5>Ankit Gadgil</h5>
                            </div>
                            <div className="col-lg-3 col-sm-6 speaker-align">
                                <a href="https://www.linkedin.com/in/nitishsharma1/" target="_blank" rel="noopener noreferrer">
                                    <img src={Nitish} alt="experience4" style={{ cursor: 'pointer' }} />
                                </a>
                                <h5>Nitish Sharma</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </section>
    )
}
