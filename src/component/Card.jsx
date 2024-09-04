import { height } from '@mui/system';
import React from 'react'

function Card() {
  return (
    <div className='card grid grid-rows-2 w-48 min-w-48 m-1 ' >
      <div>
        <img src="src\assets\images\burger-.jpg" alt="food"/>
      </div>
      <div className='grid grid-cols-2 bg-slate-900  h-16'>
        <div>
          Burger
        </div>
        <div>
          50
        </div>
        <div>
          15min 
        </div>
        <div>
          more
        </div>
      </div>
    </div>
  )
}

export default Card;
