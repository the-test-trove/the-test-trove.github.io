import React from 'react'
import { Helmet } from 'react-helmet'

export default function PageBanner() {
    return (
        <section>
            <div className="pagebanner-1">
                <div className="extra-container ">
                    <div className="pagebanner-1__tittle ">
                        <h1 class="pagebanner-1__tittle__webdesign schedule-tittle-eff">Web Design</h1>
                        <h1 class="pagebanner-1__tittle__conference schedule-tittle-eff2">Conference 2019</h1>

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
