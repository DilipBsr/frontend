import React from 'react'

function Search() {
  return (
    <>
    <div className="grid lg:grid-cols-2 lg:m-10 flex-col justify-start lg:items-start text-start gap-10">
      <div className='ml-5 '>
        <h1 className="lg:max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white">Serch Restaurant at Nearby Location</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad illo exercitationem quidem eum dolorum vero magnam necessitatibus mollitia ullam eveniet ducimus nemo dolore, quasi possimus modi accusantium maxime doloribus voluptate.
        </p>
        <div className='mt-5 w-full'>
          <input type="text" className='w-full h-10 mb-5 rounded-md'/>
          <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Search</button>
        </div>
      </div>

      <div className='flex gap-5 w-2/6 justify-self-start ml-14 mb-10'>
        <img src="src\assets\images\image.jpeg" alt="Location" />
        <img src="src\assets\images\images (5).jpeg" alt="Location" />
      </div>
      <hr />
    </div>
    </>
  )
}

export default Search
