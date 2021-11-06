/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { speakers } from '../Constants/Constants'

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

                        <div className="speaker-slider__item">
                            <div className="col-lg-4 col-md-6">
                                {speakers.map((speaker) => {
                                    return (
                                        <a href={speaker.socialLink} class="speaker-slider__item__thumb" key={speaker.id}>
                                            <img src={speaker.image} alt={`Speaker ${speaker.id}`} />
                                            <div className="speaker-slider__item__thumb__info">
                                                <h4>{speaker.name}</h4>
                                                <h5 >{speaker.title}</h5>
                                            </div>
                                        </a>
                                    )   
                                })}
                            </div>
                        </div>

                        <div className="speaker-slider__item">
                            <div className="col-lg-4 ">
                                <a href="#" class="speaker-slider__item__thumb">
                                    <img src="assets/images/uploads/speaker/speakers6.jpg" alt="speakers6" />
                                        <div className="speaker-slider__item__thumb__info">
                                            <h4>Daniel Bryan</h4>
                                            <h5>Senior Developer</h5>
                                        </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}
