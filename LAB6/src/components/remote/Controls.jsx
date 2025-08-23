import React from 'react'
import IncDecControl from './IncDecControl'
import ButtonControl from './ButtonControl'
import PowerIcon from './PowerIcon'
import ControlCover from './ControlCover'

export default function Controls({tempControls , speedControls, powerControls, unitControls}) {
    return (
        <div className="controls flex items-center justify-between gap-4">
            <IncDecControl incFunc={tempControls[0]} decFunc={tempControls[1]}/>
            
            <div className="flex gap-2">
                <ButtonControl buttonFunc={powerControls}>
                    <PowerIcon />
                </ButtonControl>
                <ButtonControl buttonFunc={unitControls}>
                    C/F
                </ButtonControl>
            </div>
            
            <IncDecControl incFunc={speedControls[0]} decFunc={speedControls[1]}/>
            <ControlCover></ControlCover>
        </div>
    )
}