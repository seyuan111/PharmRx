import React from 'react'

const NewsLetter = () => {
  return (
    <div className="w-full py-16 text-black bg-neutral-200 px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-col-3">
            <div className="lg:col-span-2 my-4">
                <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold py-2">Want to receive news on PharmRx?</h1>
                <p>Sign up here to get updates on PharmRx</p>
            </div>
            <div className="my-4">
              <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter Email" />
                <button className="border-black hover:text-white hover:bg-black rounded-md font-medium w-[50%] ml-4 my-6 px-6 py-3">Give Me News</button>
              </div>
              <p>We care about your privacy. Please read our <span className="text-blue-600 cursor-pointer">Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter