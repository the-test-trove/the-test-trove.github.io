import React from 'react'
import { Helmet } from 'react-helmet'
import { versions } from '../Constants/Constants';

export default function PageBanner() {
    return (
        <section>
            <div className="pagebanner-1">
                <div className="extra-container ">
                    <div className="pagebanner-1__tittle ">
                        <h1 class="pagebanner-1__tittle__webdesign schedule-tittle-eff">The Test Trove Conference</h1>
                        {/* {versions.map((version) => {
                            return(
                                <h4 class="pagebanner-1__tittle__conference schedule-tittle-eff2">{version.quarter}{" "}{version.year}</h4>
                            );
                        })} */}
                        <h2 class="pagebanner-2__tittle__conference">Call For Proposals Open</h2>
                        <a href="https://cfp.devconf.info/" class="header__buy-ticket " target="_blank" without rel="noreferrer">
                            <span>Proposals</span>
                        </a>
                    </div>
                </div>
            </div>
            <Helmet>
                <script src="../../assets/scripts/jquery-3.4.1.js"> </script>
                <script src="../../assets/scripts/tittle-eff.js"></script>
            </Helmet>
        </section>
    )
}
