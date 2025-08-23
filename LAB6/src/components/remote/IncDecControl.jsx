import React from 'react'

export default function IncDecControl({incFunc,decFunc}) {
    return (
        <div className='IncDec'>
            <span onClick={incFunc}><div className='arrow'></div></span>
            <div className='sep'></div>
            <span onClick={decFunc}><div className='arrow down'></div></span>
        </div>
    )
}
