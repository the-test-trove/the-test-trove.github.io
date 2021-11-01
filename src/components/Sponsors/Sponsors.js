import React from 'react'

import Sponsor1 from '../../assets/images/uploads/sponsor/sponsor1.png'

const sponsors = [
    {   
        image: Sponsor1,
        altText: 'sponsor1',
    },
]

export default function Sponsors() {
    return (
        <section>
            <div className="extra-container">
                <div className="sponsor__tittle">
                    <h1>Our Sponsor</h1>
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
