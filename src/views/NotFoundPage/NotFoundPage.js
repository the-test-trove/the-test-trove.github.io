import React from 'react'
import NotFound from '../../components/NotFound/NotFound'
import Header from '../../components/Header/Header'
import MenuNav from '../../components/MenuNav/MenuNav'
import Footer from '../../components/Footer/Footer'
import ReactHelmetScripts from '../../components/ReactHelmetScripts/ReactHelmetScripts'

export default function NotFoundPage() {
    return (
        <>
            <Header />
            <MenuNav />
            <NotFound />
            <Footer />
            <ReactHelmetScripts />
        </>
    )
}
