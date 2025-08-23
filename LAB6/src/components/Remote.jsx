import "./remote/remote.css"
import Display from "./remote/Display"
import Controls from "./remote/Controls";
import { useState } from "react"

export default function Remote() {
    const [temp, setTemp] = useState(16);
    const [speed, setSpeed] = useState(2);
    const [unit, setUnit] = useState('C');
    const [power,setPower] = useState(false);

    const calculateNewTemp = () => {unit === 'C' ? setTemp(Number((temp * 9/5 + 32).toFixed())) : setTemp(Number(((temp - 32) *5/9).toFixed()))}
    const ChangeUnit = () => {
        if(power){
            calculateNewTemp();
            unit === 'C' && power ? setUnit('F'): setUnit('C');
        };
    }
    const ChangePower = ()=> {setPower(!power)}
    const IncTemp = () => {temp < (unit==='C'? 30 : 86) && power ?setTemp(temp+1) : setTemp(temp)}
    const DecTemp = () => {temp > (unit==='C'? 16 : 60) && power ?setTemp(temp-1) : setTemp(temp)}
    const IncSpeed = () => {speed < 3 && power ?setSpeed(speed+1) : setSpeed(speed)}
    const DecSpeed = () => {speed > 0 && power ?setSpeed(speed-1) : setSpeed(speed)}
  return (
    <div className="remote">
        <Display temp={temp} unit={unit} speed={speed} power={power}></Display>
        <Controls tempControls = {[IncTemp,DecTemp]} speedControls = {[IncSpeed,DecSpeed]} powerControls={ChangePower} unitControls={ChangeUnit}></Controls>
    </div>
  )
}
