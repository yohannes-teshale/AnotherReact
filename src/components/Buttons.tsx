import React from 'react'

const Buttons = (props :any) => {
  return (
    
        <button className=' bg-orange-600 ring-2 ring-orange-800 h-10 w-40  flex items-center md:px-3 px-1 rounded-lg justify-center ' onClick={props.onClick} type={props.type}>
            {props.children}
        </button>
    
  )
}

export default Buttons