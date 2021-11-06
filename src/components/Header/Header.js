/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Logo from '../../assets/images/T3-T.png'

export default function Header() {
    return (
        <header style={{ backgroundColor: 'white' }} >
            <div className="extra-container" style={{backgroundColor:'white'}}>
                <div className="header-home ">
                    <div className="position-fixed"></div>
                    <div className="header__logo">
                        <a href="index.html">
                            <img src={Logo} alt="logo" width="50px" heignt="auto" />
                        </a>
                    </div>

                    <a href="https://cfp.devconf.info/" class="header__buy-ticket ">
                        <span>PROPOSALS</span>
                    </a>
                </div>
            </div>
        </header>
    )
}
