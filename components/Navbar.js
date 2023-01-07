import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsCart3 } from 'react-icons/bs'
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

const Navbar = () => {
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
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-xl'>
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
      <div onClick={toggleClick} className="cart absolute right-0 top-7 mx-5 md:top-auto">
        <BsCart3 className='text-2xl md:text-3xl cursor-pointer hover:text-[#82bb20]' />
      </div>
      <div ref={ref} className='sidecart absolute top-0 right-0 bg-white w-[75vw] md:w-[500px] z-10 p-10 transform transition-transform translate-x-full shadow-sm'>
        <div className="container py-5 shadow-md  bg-green-100">
        <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
        <span onClick={toggleClick} className="absolute right-3 top-3 text-2xl md:text-3xl text-[#b1fc31] cursor-pointer hover:text-[#82bb20]"><AiFillCloseCircle /></span>
        <ol className='list-decimal semi-bold mx-auto w-[75%]'>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle className='cursor-pointer text-[#b1fc31] hover:text-[#82bb20]' /><span className='mx-2 text-sm'>1</span><AiFillPlusCircle className='cursor-pointer text-[#b1fc31] hover:text-[#82bb20]' />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle className='cursor-pointer text-[#b1fc31] hover:text-[#82bb20]' /><span className='mx-2 text-sm'>1</span><AiFillPlusCircle className='cursor-pointer text-[#b1fc31] hover:text-[#82bb20]' />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle className='cursor-pointer text-[#b1fc31] hover:text-[#82bb20]' /><span className='mx-2 text-sm'>1</span><AiFillPlusCircle className='cursor-pointer text-[#b1fc31] hover:text-[#82bb20]' />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle className='cursor-pointer text-[#b1fc31] hover:text-[#82bb20]' /><span className='mx-2 text-sm'>1</span><AiFillPlusCircle className='cursor-pointer text-[#b1fc31] hover:text-[#82bb20]' />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-5">
              <div className="w-2/3 font-semibold">Tshirt - Wear the code</div>
              <div className="flex font-semibold items-center justify-center w-1/3 text-lg"><AiFillMinusCircle className='cursor-pointer text-[#b1fc31] hover:text-[#82bb20]' /><span className='mx-2 text-sm'>1</span><AiFillPlusCircle className='cursor-pointer text-[#b1fc31] hover:text-[#82bb20]' />
              </div>
            </div>
          </li>
        </ol>
        <div className='py-2 '>
        <button class="flex mx-auto text-white bg-[#b1fc31] border-0 py-2 px-4 focus:outline-none hover:bg-[#82bb20] rounded text-md">Checkout</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar