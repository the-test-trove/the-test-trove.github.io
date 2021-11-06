/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { socials, footerMenu} from '../Constants/Constants'


export default function Footer() {
    return (
        <footer>
            <div className="cursor"></div>
            <div className="cursor-follower"></div>

            <div className="container">
                <div className="footer ">
                    <a class="footer__logo" href="index.html"><img class="footer-move-up" src="assets/images/T3.png" alt="logo" /></a>
                    <div className="footer__site-text">
                        <p class="footer-move-up" style={{fontSize: '20px'}} ><strong>The Test Trove Conference 2021</strong></p>
                        <p class="footer-move-up" style={{fontStyle: 'italic'} }>Where Quality Meets Code</p>
                    </div>
                    <div className="footer__get-ticket footer-move-up">
                        <a href="#">Proposals</a>
                    </div>
                    <div className="footer__menu footer-move-up">
                        <ul>
                            {footerMenu.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a href={item.link}>{item.text}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copy-right">
                <div className="container">
                    <div className="copy-right__area">
                        <p class="copy-right__left">
                            <i class="fa fa-copyright"></i> 2021 <strong>The Test Trove Conference.</strong> Some Rights Reserved
                        </p>
                        <div className="copy-right__right">
                            {socials.map((social) => {
                                return (
                                    <a href={social.link} key={social.id}>
                                        <img src={social.image} alt={social.alt} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
