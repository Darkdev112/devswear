import React from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'
import Link from 'next/link'

const Checkout = ({ cart, addToCart, removeFromCart, subTotal }) => {
  return (
    <section >
      <div className='w-[75vw] mx-auto '>
        <h1 className='font-semibold text-3xl mt-20 mb-7 text-center '>Checkout</h1>
        <div className='flex flex-wrap flex-col shadow-md rounded-md bg-green-100 py-3 px-5 mb-10 mx-5 md:mx-0'>
          <h2 className='text-2xl my-3'>Delivery Details</h2>
          <div className='flex flex-row '>
            <div className="relative mb-2 mr-4 w-[50%]">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-[#82bb20] focus:ring-2 focus:ring-[#b1fc31] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " />
            </div>
            <div className="relative mb-2 w-[50%]">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-[#82bb20] focus:ring-2 focus:ring-[#b1fc31] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="relative mb-2 ">
            <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
            <textarea id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-[#82bb20] focus:ring-2 focus:ring-[#b1fc31] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "></textarea>
          </div>
          <div className='flex flex-row '>
            <div className="relative mb-2 mr-4 w-[50%]">
              <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
              <input type="number" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-[#82bb20] focus:ring-2 focus:ring-[#b1fc31] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " />
            </div>
            <div className="relative mb-2 w-[50%]">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
              <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-[#82bb20] focus:ring-2 focus:ring-[#b1fc31] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className='flex flex-row mb-3'>
            <div className="relative mb-2 mr-4 w-[50%]">
              <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
              <input type="city" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-[#82bb20] focus:ring-2 focus:ring-[#b1fc31] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " />
            </div>
            <div className="relative mb-2 w-[50%]">
              <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">PinCode</label>
              <input type="number" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-[#82bb20] focus:ring-2 focus:ring-[#b1fc31] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
        </div>
        <div className='flex flex-wrap flex-col shadow-md py-3 px-5 rounded-md mb-10 bg-green-100 mx-5 md:mx-0'>
          <h2 className='text-2xl my-3'>Review Cart</h2>
          <ol className='list-decimal semi-bold md:text-xl mx-auto w-[75%]'>
            {Object.keys(cart).length == 0 && <div className='my-4 md:text-xl text-center font-semibold'>You cart is empty</div>}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="item flex my-10">
                    <div className="w-2/3 font-semibold break-words">{cart[k].name}</div>
                    <div className="flex font-semibold items-center justify-center w-1/3 text-sm md:text-xl"><AiFillMinusCircle onClick={() => { removeFromCart(k, 1, 499, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-[#b1fc31] hover:text-[#82bb20] mx-1' /><span className='mx-2 text-sm md:text-xl'>{cart[k].qty}</span><AiFillPlusCircle onClick={() => { addToCart(k, 1, 499, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-[#b1fc31] hover:text-[#82bb20] mx-1' />
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
          {subTotal != 0 && <>
            <div className='flex items-center justify-center my-3'>
              <div className='text-xl font-semibold'>SubTotal : ₹{subTotal}</div>
            </div>
            <div className='py-2 flex flex-row mx-auto'>
              <Link href={"/checkout"}><button className="flex mx-auto text-white bg-[#b1fc31] border-0 py-2 px-5 focus:outline-none hover:bg-[#82bb20] rounded text-xl"><BsFillBagCheckFill className='my-1 mr-1' />Pay ₹{subTotal}</button></Link>
            </div>
          </>}
          {subTotal == 0 && <div className='py-2 flex flex-row mx-auto'>
            <Link href={"/tshirts"}><button className="flex mx-auto text-white bg-[#b1fc31] border-0 py-2 px-5 focus:outline-none hover:bg-[#82bb20] rounded text-xl"><BsFillBagCheckFill className='my-1 mr-1' />Buy Now</button></Link>
          </div>}
        </div>
      </div>
    </section>
  )
}

export default Checkout