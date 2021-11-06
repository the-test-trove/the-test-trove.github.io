import React from 'react'
import { sponsors } from '../Constants/Constants';

export default function Sponsors() {
    return (
        <section>
            <div className="extra-container">
                <div className="sponsor__tittle">
                    <h1>Our Sponsors</h1>
                </div>
                <div className="sponsor">
                   {sponsors.map((sponsor) => {
                       return (
                           <div className="sponsor__item" key={sponsor.altText}>
                               <img src={sponsor.image} alt={sponsor.altText} />
                            </div>
                       );
                   })}
                </div>
            </div>
        </section>
    )
}
