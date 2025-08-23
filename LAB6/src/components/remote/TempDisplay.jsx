import React from 'react'
import UnitDisplay from './UnitDisplay';

export default function TempDisplay({temp,unit, power}) {
    console.log(power);
  return (
    <>
        <div className={power ? 'tempDisplay' : 'tempDisplay off'}>
            {power? temp : '00'}
        </div>
        <UnitDisplay unit={unit} power={power}></UnitDisplay>
    </>
  )
}
