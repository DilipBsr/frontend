import { ClassNames } from '@emotion/react'
import React from 'react'

function Navbar() {
  return (
  <>
  <div className=' Navbar grid grid-cols-2 gap-2 p-2 w-100'>
    <div className='logo w-24 '>
      <img className='ml-4 rounded-full' src="src\assets\images\Logo.png" alt="Logo" />
    </div>
    <div className='Login items-center flex justify-end  gap-5 mr-5 '>
      <span>Order</span>
      <span>Profile</span>
      <span>Logout</span>
    </div>
   </div> 
   <div className='w-100 mb-5'>
    <img src="src\assets\images\main.png" width='100%' alt="foodImage" />
   </div>
  </>
  )
}

export default Navbar

