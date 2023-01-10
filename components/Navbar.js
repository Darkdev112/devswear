import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsCart3, BsFillBagCheckFill,BsArrowLeftCircle } from 'react-icons/bs'
import {  AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import {MdAccountCircle} from 'react-icons/md'

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const ref = useRef();
  const toggleClick = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    }
    else {
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full');
    }
  }
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-xl sticky top-0 bg-white z-10'>
      <div className="logo mx-5">
        <Link href="/">
          <Image src={'/logo.png'} alt="nav_logo" width={253} height={55} ></Image>
        </Link>
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-6 font-bold md:text-md'>
          <Link href="/tshirts" legacyBehavior><a><li className='hover:text-[#82bb20]'>Tshirts</li></a></Link>
          <Link href="/hoodies" legacyBehavior><a><li className='hover:text-[#82bb20]'>Hoodies</li></a></Link>
          <Link href="/stickers" legacyBehavior><a><li className='hover:text-[#82bb20]'>Stickers</li></a></Link>
          <Link href="/mugs" legacyBehavior><a><li className='hover:text-[#82bb20]'>Mugs</li></a></Link>
        </ul>
      </div>
      <div  className=" flex flex-row cart absolute right-0 top-6 mr-2 md:mx-5 md:top-auto">
        <Link href={"/login"}><MdAccountCircle className='text-2xl md:text-3xl mr-1  md:mr-5 hover:text-[#82bb20]'/></Link>
        <BsCart3 onClick={toggleClick} className='text-2xl md:text-3xl cursor-pointer hover:text-[#82bb20]' />
      </div>
      <div ref={ref} className='sidecart absolute top-0 right-0  bg-green-100 w-[75vw] md:w-[500px] z-10 py-4 md:p-10 transform transition-transform translate-x-full shadow-md'>
        <div className="container">
          <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
          <span onClick={toggleClick} className="absolute right-3 top-3 text-2xl md:text-3xl text-[#b1fc31] cursor-pointer hover:text-[#82bb20]"><BsArrowLeftCircle /></span>
          <ol className='list-decimal semi-bold mx-auto w-[75%]'>
            {Object.keys(cart).length==0 && <div className='my-4 text-center font-semibold'>You cart is empty</div> }
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="item flex my-10">
                    <div className="w-2/3 font-semibold break-words">{cart[k].name}</div>
                    <div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle onClick={() => {removeFromCart(k,1,499,cart[k].name,cart[k].size,cart[k].variant)}} className='cursor-pointer text-[#b1fc31] hover:text-[#82bb20] mx-1' /><span className='mx-2 text-sm'>{cart[k].qty}</span><AiFillPlusCircle onClick={() => {addToCart(k,1,499,cart[k].name,cart[k].size,cart[k].variant)}} className='cursor-pointer text-[#b1fc31] hover:text-[#82bb20] mx-1' />
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
          {subTotal!=0 && <div className='flex items-center justify-center my-3'>
            <div className='text-lg font-semibold'>SubTotal : ₹{subTotal}</div>
          </div>}
          <div className='py-2 flex flex-col md:flex-row w-[70%] mx-auto md: justify-around'>
            <Link href={"/checkout"}><button className="flex mx-auto text-white bg-[#b1fc31] border-0 py-1 px-2 focus:outline-none hover:bg-[#82bb20] rounded text-md"><BsFillBagCheckFill className='my-1 mr-1' />Checkout</button></Link>
            <button onClick={clearCart} className="flex mx-auto md:mx-0 my-4 md:my-0 text-white bg-[#b1fc31] border-0 py-1 px-3 focus:outline-none hover:bg-[#82bb20] rounded text-md">Clear Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar