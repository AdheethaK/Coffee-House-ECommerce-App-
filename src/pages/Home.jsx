import React from 'react'

const Home = () => {
  return (
    <div className='grid grid-rows-3 gap-y-1'  style={{ width : '1288px' , height : '685px' }}  >
        <div className='row-start-1 row-span-1 bg-sky-300' >
            <div className='bg-red-300'>
               <p className='bg-red-300' >This week specials</p>
            </div>
            <div>grid</div>
        </div>
        <div className='row-start-2 row-span-2 bg-sky-300' >Order History</div>
    </div>
  )
}

export default Home