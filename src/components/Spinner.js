import React from 'react'
import "./Spinner.css"
/* css loader generator website se koi v le aao */
const Spinner = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
        
        <div className='custom-loader'></div>
        <p className="text-white text-lg font-semibold">Loading...</p>
    </div>
  )
}

export default Spinner