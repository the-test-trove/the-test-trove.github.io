/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import { speakers } from '../Constants/Constants'
import Speaker1 from '../../assets/images/uploads/speaker/speakers13.jpg'

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
                            <div className="col-lg-3 col-sm-6">
                                <a href="https://source.redhat.com/groups/public/workflow_and_integration_qe/the_test_trove/the_test_trove_conferencet3con_q2_may_26_2021" class="experience__thumb movein-ex--1">
                                    <img src={Speaker1} alt="experience3" style={{ cursor: 'pointer' }} />
                                </a>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <a href="https://source.redhat.com/groups/public/workflow_and_integration_qe/the_test_trove/the_test_trove_conferencet3con_q3_august_26_2021" class="experience__thumb movein-ex--1">
                                    <img src={Speaker1} alt="experience4" style={{ cursor: 'pointer' }} />
                                </a>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <a href="https://source.redhat.com/groups/public/workflow_and_integration_qe/the_test_trove/the_test_trove_conferencet3con_q3_august_26_2021" class="experience__thumb movein-ex--1">
                                    <img src={Speaker1} alt="experience4" style={{ cursor: 'pointer' }} />
                                </a>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <a href="https://source.redhat.com/groups/public/workflow_and_integration_qe/the_test_trove/the_test_trove_conferencet3con_q3_august_26_2021" class="experience__thumb movein-ex--1">
                                    <img src={Speaker1} alt="experience4" style={{ cursor: 'pointer' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
