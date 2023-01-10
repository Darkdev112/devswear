import React from 'react'

const Order = () => {
  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">DEVSWEAR.COM</h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Order Id : 12121212</h1>
            <p class="leading-relaxed mb-4">Your order has been placed successfully.</p>
            <div class="flex mb-4">
              <a class="flex-grow text-[#b1fc31] py-2 text-lg px-1">Description</a>
              <a class="flex-grow text-center text-[#b1fc31] py-2 text-lg px-1">Quantity</a>
              <a class="flex-grow text-center text-[#b1fc31] py-2 text-lg px-1">Price</a>
            </div>
            <div class="flex border-t border-gray-200 py-2 justify-between">
              <span class="text-gray-900">Wear the code</span>
              <span class=" text-gray-900">1</span>
              <span class=" text-gray-900">₹499.00</span>
            </div>
            <div class="flex border-t border-gray-200 py-2 justify-between">
              <span class="text-gray-900">Wear the code</span>
              <span class=" text-gray-900">1</span>
              <span class=" text-gray-900">₹499.00</span>
            </div>
            <div class="flex border-t border-gray-200 py-2 justify-between border-b mb-6 ">
              <span class="text-gray-900">Wear the code</span>
              <span class=" text-gray-900">1</span>
              <span class=" text-gray-900">₹499.00</span>
            </div>
            <div class="flex">
              <span class="title-font font-medium text-2xl text-gray-900">₹499.00</span>
              <button class="flex ml-auto text-white bg-[#b1fc31] border-0 py-2 px-3 focus:outline-none hover:bg-[#82bb20] rounded">Track Order</button>
            </div>
          </div>
          <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
        </div>
      </div>
    </section>
  )
}

export default Order