import React, { useState } from 'react'

export default function ControlCover() {
    const [sliderClosed, setSlider] = useState(true);
    const toggleSlider = () => {setSlider(!sliderClosed)}
    return (
        <div className={sliderClosed ? 'cover' : 'cover open'} onClick={toggleSlider}>
            <span></span><span></span><span></span>
        </div>
    )
}
