import React from 'react'
import { useSnapshot } from 'valtio'

import state from '../store'
import { downloadCanvasToImage } from '../config/helpers'
import { download } from '../assets'

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state)

  const activeStyles = isFilterTab && isActiveTab
    ? { backgroundColor: snap.color, opacity: 0.5 }
    : { backgroundColor: "transparent", opacity: 1 }
  return (
    <div
      key={tab.name}
      className={`tab-btn ${isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'}`}
      onClick={handleClick}
      style={activeStyles}
    >
      <img
        src={tab.icon} alt={tab.name}
        className={`${isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'}`}
      />

    </div>
    // TODO: Add download button implement this code
    //   <div>
    //   <button className='download-btn' onClick={downloadCanvasToImage}>
    //     <img
    //       src={download}
    //       alt='download_image'
    //       className='w-3/5 h-3/5 object-contain'
    //     />
    //   </button>
    // </div>
  )
}

export default Tab