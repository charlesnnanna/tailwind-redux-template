import React from 'react'
import Bar from './Bar'



const data = [
    {
      day: "mon",
      amount: 17.45
    },
    {
      day: "tue",
      amount: 34.91
    },
    {
      day: "wed",
      amount: 52.36
    },
    {
      day: "thu",
      amount: 31.07
    },
    {
      day: "fri",
      amount: 23.39
    },
    {
      day: "sat",
      amount: 43.28
    },
    {
      day: "sun",
      amount: 25.48
    }
  ]

  const reversedData = data.reverse()

export default function Data() {
  return (
      <>
             <div className='w-full p-7 border mt-8 rounded-2xl flex flex-col bg-white'>
                <div>
                    <h2 className='text-2xl font-bold text-black'>Spending - Last 7 days</h2>
                </div>

                <div className='flex self-center flex-row border relative h-72 w-full'>
                    <div className=' flex flex-row mt-8 transform rotate-180 justify-around  w-full border absolute bottom-6'>
                            {
                                reversedData.map(function(item, index){
                                    return(
                                        <Bar key = {index} amount = {item.amount}/>
                                    )
                                })
                            }
                    </div>

                    <div className='absolute bottom-0 flex justify-around border w-full flex-row-reverse'>
                            {
                              data.map(function(item, index){
                                  return(
                                         <div  key={index}>
                                            <p className='text-sm border w-7 sm:w-10 md:w-11  text-center'>{item.day}</p>
                                        </div>             
                                  )
                              })
                            }
                    </div>
                </div>

                <div className='flex flex-row justify-between mt-7 border-t border-black pt-7'>
                    <div>
                        <h2 className='text-sm'>Total this month</h2>
                        <p className='text-3xl font-black font-bold text-black'>$478.33</p>
                    </div>
                    <div >
                        <p className='font-bold text-base text-right'>+2.4%</p>
                        <p className='text-sm text-right'>from last month</p>
                    </div>
                </div>
            </div>
      </>
   
  )
}
