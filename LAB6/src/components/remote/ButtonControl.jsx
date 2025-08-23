import React from 'react'

export default function ButtonControl({children, buttonFunc}) {
    return (
        <div className='button' onClick={buttonFunc}>
            {children}
        </div>
    )
}
