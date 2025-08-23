import React, { useEffect, useState } from 'react'

export default function SpeedDisplay({speed, power}) {
    const [isAnimating, ChangeAnimation] = useState(false);

    let speedDivs = [];
    for(let i=0; i<speed;i++){
        speedDivs.push(<span key={i}></span>);
    }
    useEffect(() => {
        ChangeAnimation(true);
        setTimeout(function(){ChangeAnimation(false)},500);
    }, [speed])
    return (
        <div className='speedDisplay'>
            <div className={isAnimating ? 'fan spin' : power?'fan':'fan off'}>
                <span></span><span></span><span></span><span></span>
            </div>
            <div className={ power?'speedValue':'speedValue off'}>
                {speedDivs}
            </div>
        </div>
    )
}
