import React from 'react'
import Experience from '../../components/Experience/Experience'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MenuNav from '../../components/MenuNav/MenuNav'
import PageBanner from '../../components/PageBanner/PageBanner'
import ReactHelmetScripts from '../../components/ReactHelmetScripts/ReactHelmetScripts'
import Schedule from '../../components/Schedule/Schedule'
import Speakers from '../../components/Speakers/Speakers'
// import Sponsors from '../../components/Sponsors/Sponsors'

import '../../assets/styles/css/slick.css'
import '../../assets/styles/css/slick-theme.css'
import '../../assets/styles/css/animate.css'
import '../../assets/styles/style.css'
import About from '../../components/AboutT3Con/About'

export default function HomePage() {
    return (
        <>
            <Header />
            <MenuNav />
            <PageBanner />
            <About />
            <Experience />
            <Schedule />
            <Speakers />
            {/* <Sponsors /> */}
            <Footer />
            <ReactHelmetScripts />
        </>
    )
}
