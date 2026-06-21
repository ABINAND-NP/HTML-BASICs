import React, { useState } from 'react'

const ButtonColor = () => {

    const [colorRed,setColorRed] = useState(false);
    const [colorGreen,setColorGreen] = useState(false);

   
    const handleRed = () => {

    setColorRed((prev) => !prev);
        
    }

    const handleGreen = () =>{

        setColorGreen((prev) => !prev);

    }

    
  return (
    <div className='flex flex-col gap-3'>
        <div className='flex gap-3'>
            <button 
            className='bg-red-500 w-20  h-10'
            onClick={handleRed}
            >Red</button>
            <button 
            className='bg-green-500 w-20 h-10'
            onClick={handleGreen}
            >Green</button> 
        </div> 

        <div className='flex gap-3'>
            <button className={`'bg-blue-500 w-20 h-10 ${colorRed ? "bg-red-500" : "bg-blue-500"}`}></button>
            <button className={`bg-blue-500 w-20 h-10 ${colorGreen ? "bg-green-500" : "bg-blue-500"} `}></button>
        </div>    
    </div>
  )
}

export default ButtonColor
