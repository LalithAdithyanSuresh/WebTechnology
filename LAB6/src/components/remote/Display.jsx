import React from 'react'
import TempDisplay from './TempDisplay'
import SpeedDisplay from './SpeedDisplay'
import SignalDisplay from './SignalDisplay'
export default function Display({temp,unit, speed, power}) {
  return (
    <div className='display'>
        <SignalDisplay vars={[temp,unit,speed,power]}></SignalDisplay>
        <TempDisplay temp = {temp} power={power} unit={unit}></TempDisplay>
        <SpeedDisplay speed = {speed} power={power}></SpeedDisplay>
    </div>
  )
}
