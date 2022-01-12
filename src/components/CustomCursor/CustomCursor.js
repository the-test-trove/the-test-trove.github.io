import React from 'react'
import AnimatedCursor from 'react-animated-cursor'

export default function CustomCursor() {
    return (
        <AnimatedCursor 
            innerSize={8}
            outerSize={8}
            color='255,0,0'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            trailingSpeed={8}
        />
    )
}
