import React from 'react'
import BodyButton from "./BodyButton";

const ButtonsList = () => {
  const buttonsName = ['All', 'Gaming', 'Songs', 'Life', 'Comedy', 'Cooking', 'Cricket', 'Trend', 'Shopping','Live','Month'];
  
  return (
    <div className='flex my-4'>
      {
        buttonsName.map((name, idx) => <BodyButton name={name}  key={name+idx} />)
      }
    </div>
  )
}

export default ButtonsList