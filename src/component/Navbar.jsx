import { ClassNames } from '@emotion/react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'
import Badge from '@mui/material/Badge';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
  return (
  <div className=' Navbar grid grid-cols-2 gap-2 p-2 w-100'>
    <div className='logo w-24 lg:w-32'>
      <img className='ml-4 rounded-full' src="src\assets\images\Logo.png" alt="Logo" />
    </div>
    <div className='Login items-center flex justify-end  gap-5 mr-5 lg:gap-12 '>
      <SearchIcon/>
      <Badge badgeContent={1} color="primary">
        <ShoppingCartIcon color="action"/>
      </Badge>
      <AccountCircleIcon/>
    </div>
   </div> 
  )
}

export default Navbar

