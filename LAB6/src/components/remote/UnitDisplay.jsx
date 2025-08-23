import React from 'react'

export default function UnitDisplay({unit ,power}) {
    const C = unit === 'C' ? true : false;
    return (
        <div className='unitDisplay'>
            <span className={C ? power ?'': 'off' : 'off'}>C</span>
            <span className={!C ? power ?'': 'off' : 'off'}>F</span>
        </div>
    )
}
