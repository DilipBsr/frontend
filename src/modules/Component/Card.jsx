import { height } from '@mui/system';
import React from 'react'

function Card({location,image}) {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <a href="#">
          <img className="rounded-t-lg" src={image} alt="Image" />
        </a>
        <div className="p-5">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{location}</h3>
          <a href="#"className="items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
          </a>
        </div>
      </div>
    </>
  )
}

export default Card;
