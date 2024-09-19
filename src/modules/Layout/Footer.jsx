import React from 'react'

function Footer() {
  return (
    <>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
          <div className='lg:grid lg:grid-cols-2 items-center'>
            <div className="flex justify-center items-center lg:justify-start ">
              <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="src\assets\images\Logo.png" className="h-16 " alt="Logo" />
              </a>
            </div>
            <div className=''>
              <ul className="flex flex-wrap md:flex justify-between items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 text-center dark:text-gray-400">© 2025   <a href="https://google.com/" className="hover:underline">Bhojan Point™</a>. All Rights Reserved.</span>
        </div>
      </footer>
    </>
  )
}

export default Footer
