import React from 'react'

export default function NotFound() {
    return (
        <div className="erropage">
            <div className="erropage-area">
                <div className="head">
                    <div className="meta"></div>
                    <div className="meta"></div>
                </div>
                <div className="body">
                    <p>Sorry! We can’t find the page that you’re looking for.</p>
                </div>
                <a className="backBtn" href="index.html">Back Home</a>
            </div>
        </div>
    )
}
