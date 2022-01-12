import React, { version } from 'react'
import { Helmet } from 'react-helmet'
import { versions } from '../Constants/Constants';

export default function PageBanner() {
    return (
        <section>
            <div className="pagebanner-1">
                <div className="extra-container ">
                    <div className="pagebanner-1__tittle ">
                        <h1 class="pagebanner-1__tittle__webdesign schedule-tittle-eff">The Test Trove Conference</h1>
                        {versions.map((version) => {
                            return(
                                <h1 class="pagebanner-1__tittle__conference schedule-tittle-eff2">{version.quarter}{" "}{version.year}</h1>
                            );
                        })}
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
