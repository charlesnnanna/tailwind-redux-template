import React from 'react'

export default function Bar({ amount}) {
    amount = amount * 4.5;
  
  return (
    <>
        <div className='flex flex-col '>
            <div 
            className= 'w-7 sm:w-10 md:w-11  border rounded-b bg-darkBrown hover:bg-lightBrown active:bg-lightBlue'
            style = {{'height' : `${amount + "px"}`}}>
            </div>
            
        </div>
    </>
  )
}
