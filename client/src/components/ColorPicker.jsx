import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state)
  return (
    <div className='absolute left-full ml-3'>

      <SketchPicker
        color={snap.color}
        disableAlpha
        // we can add own own preset colors if we want to with this following code  i have commented it out for now 
        // presetColors={[]}
        // added this to make the color picker more visible and apply that color to the element and its unblocked using state.color
        onChange={(color) => state.color = color.hex}
      />


    </div>
  )
}

export default ColorPicker