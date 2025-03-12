import React from 'react';

import { FiSettings } from 'react-icons/fi';
import { TbCalendarTime } from "react-icons/tb";
import { RiNotification3Fill } from "react-icons/ri";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

import avatar from '../data/avatar3.png';

const Navbar = () => {
  return (
    <div className='grid grid-cols-8 gap-x-1 relative top-2'>
      <div className='col-start-1 col-span-6 grid grid-cols-2 gap-x-1'>
        
        {/* Greeting Text */}
        <p className='col-start-1 text-2xl p-2' style={{ letterSpacing : '0.2rem' }}>Good Morning , Sammy ! 😃</p>

        {/* Search Bar */}
        <div class="col-start-2 flex px-4 py-3 rounded-2xl border-2 border-black-500 overflow-hidden mx-auto bg-white relative" 
                    style={{border : '1px solid #2E2328' , boxShadow : '2.8px 2.8px 0 0 #2E2328' ,  width : '470px' }}>
          <input type="text" placeholder="Search Something..."
                  class="w-full outline-none bg-transparent text-black text-sm" style={{ letterSpacing : '0.2rem' }} />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" class="fill-black-600 cursor-pointer">
              <path
                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
              </path>
          </svg>
        </div>

      </div>
      <div className='col-start-7 col-span-2 text-left grid grid-col-4 gap-x-1'>
        <div className='col-start-1 col-span-1'>
            <div className='w-12 h-12 bg-white rounded-full relative left-3 place-content-center text-2xl' style={{ border : '1px solid #2E2328' , boxShadow : '2.8px 2.8px 0 0 #2E2328' }}>
              <TbCalendarTime className='relative' style={{ left : '11px' }} />
            </div>
        </div>
        <div className='col-start-2 col-span-1'>
            <div className='w-12 h-12 bg-white rounded-full place-content-center relative left-3 text-2xl' style={{ border : '1px solid #2E2328' , boxShadow : '2.8px 2.8px 0 0 #2E2328' }}>
              <IoChatboxEllipsesOutline className='relative' style={{ left : '11px' }} />
            </div>
        </div>
        <div className='col-start-3 col-span-1'>
            <div className='w-12 h-12 bg-white rounded-full place-content-center relative left-3 text-2xl' style={{ border : '1px solid #2E2328' , boxShadow : '2.8px 2.8px 0 0 #2E2328' }}>
              <RiNotification3Fill className='relative' style={{ left : '11px' }} />
            </div>
        </div>
        <div className='col-start-4 col-span-1'>
            <div className='w-14 h-14 bg-white rounded-xl place-content-center relative left-3 text-2xl'>
              <img className='rounded-xl p-1 w-14 h-auto relative' style={{ top : '1px' }} src={avatar} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar