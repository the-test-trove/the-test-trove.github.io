/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import Experience1 from '../../assets/images/uploads/experience/experience1.jpg'
import Experience2 from '../../assets/images/uploads/experience/experience2.jpg'
import Experience3 from '../../assets/images/uploads/experience/experience3.jpg'
import Experience4 from '../../assets/images/uploads/experience/experience4.jpg'
import Experience5 from '../../assets/images/uploads/experience/experience5.jpg'


export default function Experience() {
    return (
        <section>
            <div className="extra-container">
                <div className="experience__tittle">
                    <div className="experience__tittle1"><h1>Virtual, Remote</h1></div>
                    <h3 id="counting" class="tittle-eff2">18th</h3>
                    <div className="experience__tittle2"><h1>November, 2021</h1></div>
                </div>
            </div>

            <div className="experience">
                <div className="extra-container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            <a href="#" class="experience__thumb movein-ex--1">
                                <img src={Experience1} alt="experience1" />
                            </a>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <a href="#" class="experience__thumb experience__thumb--right movein-ex--2">
                                <img src={Experience2} alt="experience2" />
                            </a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <a href="#" class="experience__thumb experience__thumb--left movein-ex--3">
                                <img src={Experience3} alt="experience3" />
                            </a>
                        </div>
                        <div className="col-xl-6 col-lg-4 col-sm-12">
                            <div className="experience__text">
                                <h1>Experience</h1>
                                <p>Nulla elementum rutrum velit. Mauris a turpis mollis. Soluta hic velit optio reiciendis ullam impedit veniam quam quibusdam ducimus sint!</p>
                                <div className="link-draw__hover">
                                    <svg viewBox="4 0 118 98.6" class="hand-draw"><path class="hand-med-hover" d="M33.2,31.2C53.8,14.1,78.4,9.5,96.9,19.4c12.2,6.5,26.7,21.9,23.9,37.8c-3.9,22.2-39.1,37.1-65.6,34.5c-8.8-0.9-17.6-3.8-25.3-8.2C16.7,76,4.5,63.1,4.4,47.2C4.3,32.4,15,19.3,27.2,12.1c3.6-2.1,7.5-3.9,11.5-5.3c15.2-5.5,27.7-2.5,32.7-1.3c3.6,0.9,18,4.9,29.9,19c5.4,6.3,11.2,13.1,12.5,24.5c0.3,2.6,2,20.2-10.5,34.1C93.9,93.4,82,94,70,94.7c-9.9,0.6-25.8,1.5-39.3-10.1c-2.3-2-20.5-18.1-16-38.8c2.4-10.8,10-18.2,12.4-20.5c6.8-6.6,13.6-8.9,19.7-11C52,12.7,63,9.1,76.3,11.8c5,1,14.8,3.1,23.4,11.9c2.4,2.5,9.2,9.7,11.6,22c0.8,4.2,2.2,11.4-0.4,19.1c-4.9,14.2-20.9,19.7-28.3,22.4c-6,2.1-18,6.4-31.1,1.9c-16.1-5.4-33.7-23.9-28.8-44.2C25.5,33.2,35,24,44.6,19.9c14.3-6.2,26.1,0,28,1" /></svg>
                                    <a class="experience__text__link" href="#"><strong>Discover More</strong></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <a href="#" class="experience__thumb experience__thumb--middle movein-ex--4">
                                <img src={Experience4} alt="experience4" />
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-5">
                            <a href="#" class="experience__thumb experience__thumb--center movein-ex--5">
                                <img src={Experience5} alt="experience5" />
                            </a>
                        </div>
                    </div>
                </div>


            </div>

        </section>
    )
}
