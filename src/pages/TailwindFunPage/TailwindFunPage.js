import React from 'react'
import Data from './components/Data'

import Header from './components/Header'

export default function TailwindFunPage() {
  return (
    <>
        <div className = 'flex overflow-hidden font-sans flex-col items-center w-11/12 sm:w-1/2 m-7 border justify-center'>
          <Header/>
          <Data/>
        </div>
    </>
    
        
  
  )
}
