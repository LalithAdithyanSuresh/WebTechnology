import React, { useEffect, useState } from 'react'

export default function SignalDisplay(props) {
    const [signal, setSignal] = useState(true)
    useEffect(() => {
        console.log('ccc')
        setSignal(true);
        setTimeout(() => setSignal(false),300);
    },[props]);

    return (
        <div className={signal? 'signal signalAnim' : 'signal'}>
            <span></span><span></span><span></span>
        </div>
    )
}
