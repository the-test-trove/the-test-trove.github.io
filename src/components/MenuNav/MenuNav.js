/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function MenuNav() {
    return (
        <section>
            <div className="menu-nav">

                <div className="extra-container">
                    <div className="menu-nav-close"></div>
                    <nav>
                        <ul>
                            <li><a class="menu-link link--kukuri" href="index.html" data-letters="Home">Home</a></li>
                            <li><a class="menu-link link--kukuri" href="venue.html" data-letters="Venue">Venue</a></li>
                            <li><a class="menu-link link--kukuri" href="schedule.html" data-letters="Schedule">Schedule</a></li>
                            <li>
                                <a class="menu-link link--kukuri" data-letters="Speaker" href="#">Speaker</a><i class="fa fa-angle-down"></i>
                                <ul class="sub-menu">
                                    <li><a class="menu-link link--kukuri" data-letters="Speaker1" href="speaker-1.html">Speaker1</a></li>
                                    <li><a class="menu-link link--kukuri" data-letters="Speaker2" href="speaker-2.html">Speaker2</a></li>
                                </ul>
                            </li>
                            <li>
                                <a class="menu-link link--kukuri" href="#" data-letters="Blog">Blog</a><i class="fa fa-angle-down"></i>
                                <ul class="sub-menu">
                                    <li><a class="menu-link link--kukuri" data-letters="Blog Single" href="blog-single.html">Blog Single</a></li>
                                    <li><a class="menu-link link--kukuri" data-letters="Blog Grid" href="blog.html">Blog Grid</a></li>
                                </ul>
                            </li>

                            <li>
                                <a class="menu-link link--kukuri" href="#" data-letters="Pages">Pages</a>
                                <i class="fa fa-angle-down"></i>
                                <ul class="sub-menu">
                                    <li><a class="menu-link link--kukuri" href="contact.html" data-letters="Contact">Contact</a></li>
                                    <li><a class="menu-link link--kukuri" data-letters="404" href="404.html">404</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}
