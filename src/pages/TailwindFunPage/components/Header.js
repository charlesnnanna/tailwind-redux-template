import React from 'react'
import image from '../../../assets/logo.svg'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


//The Header Component
export default function Header() {
  return (
    <>
      <div className='flex rounded-2xl p-6 flex-row justify-between  border w-full border  bg-darkBrown'>
          <div className=''>
              <h2 className='text-white text-sm'>
                  My balance
              </h2>
              <p className='text-2xl sm:text-3xl font-bold text-white'>
                  $921.48
              </p>
          </div>

          <div>
              <img src = {image} alt = 'logo' />
          </div>
      </div>
    </>
  )
}
