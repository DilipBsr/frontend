import React from 'react'
import RestaurantCarousal from '../../Component/RestaurantCarousal'
import Button from '../../Component/Button'
function Search() {
  return (
    <>
    <div className="lg:grid lg:grid-cols-2 lg:m-10 flex-col justify-start ">
      <div className='m-5'>
        <h1 className="lg:max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white">Serch Restaurant at Nearby Location</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad illo exercitationem quidem eum dolorum vero magnam necessitatibus mollitia ullam eveniet ducimus nemo dolore, quasi possimus modi accusantium maxime doloribus voluptate.
        </p>
        
        <div className='mt-5 w-full'>
          <input type="text" className='w-full h-10 mb-5 rounded-md'/>
        </div>
        <Button buttonName="Search"/>
      </div>

      <div>
        <RestaurantCarousal/>
      </div>

    </div>

    </>
  )
}

export default Search
