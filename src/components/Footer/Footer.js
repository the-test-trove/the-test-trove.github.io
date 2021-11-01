/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="cursor"></div>
            <div className="cursor-follower"></div>

            <div className="container">
                <div className="footer ">
                    <a class="footer__logo" href="index.html"><img class="footer-move-up" src="assets/images/logo.png" alt="logo" /></a>
                    <div className="footer__site-text">
                        <p class="footer-move-up">Web Design Conference 2019.</p>
                        <p class="footer-move-up">International conference for UX/UI designers</p>
                    </div>
                    <div className="footer__get-ticket footer-move-up">
                        <a href="#">GET TICKETS</a>
                    </div>
                    <div className="footer__menu footer-move-up">
                        <ul>
                            <li><a href="#">Become a sponsor</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Teams of service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copy-right">
                <div className="container">
                    <div className="copy-right__area">
                        <p class="copy-right__left">
                            <i class="fa fa-copyright"></i> 2021 <span>T3 Con</span>. All Rights Reserved, The Test Trove Conference
                        </p>
                        <div className="copy-right__right">
                            <a href="#"><img src="assets/images/footer-face.png" alt="face" /></a>
                            <a href="#"><img src="assets/images/footer-ins.png" alt="ins" /></a>
                            <a href="#"><img src="assets/images/footer-in.png" alt="in" /></a>
                            <a href="#"><img src="assets/images/footer-twit.png" alt="twit" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
