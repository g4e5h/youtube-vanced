import React from 'react'

const BodyButton = ({name}) => {
  return (
    <button className={`px-5 py-1 m-1 rounded-lg
     ${name==='All' ? " bg-stone-950 text-white" :
                      " bg-gray-200 hover:text-white hover:bg-stone-950 "} 
     hover:shadow-md`}>{name}</button>
  )
}

export default BodyButton