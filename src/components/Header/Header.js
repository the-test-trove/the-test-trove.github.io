/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Logo from '../../assets/images/logo.png'

export default function Header() {
    return (
        <header >
            <div className="extra-container ">
                <div className="header-home ">
                    {/* <div className="header__menu-icon">
                        <div className="header__menu-icon__dot ">
                            <span ></span>
                            <span ></span>
                        </div>
                        <div className="header__menu-icon__dot header__menu-icon__dot--vertical">
                            <span ></span>
                            <span ></span>
                        </div>
                        <div className="header__menu-icon__dot header__menu-icon__dot--skew">
                            <span ></span>
                            <span ></span>
                        </div>
                        <div className="header__menu-icon__dot header__menu-icon__dot--skew-reverse">
                            <span ></span>
                            <span ></span>
                        </div>
                    </div> */}
                    <div className="position-fixed"></div>
                    <div className="header__logo">
                        <a href="index.html"><img src={Logo} alt="logo" /></a>
                    </div>

                    <a href="#" class="header__buy-ticket ">
                        <span>BUY TICKETS</span>
                    </a>
                </div>
            </div>
        </header>
    )
}
