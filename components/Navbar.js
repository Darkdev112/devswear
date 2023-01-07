import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BsCart3} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-xl'>
      <div className="logo mx-5">
        <Link href="/">
        <Image src={'/logo.png'} alt="nav_logo" width={253} height={55} ></Image>
        </Link>
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-6 font-bold md:text-md'>
          <Link href="/tshirts" legacyBehavior><a><li>Tshirts</li></a></Link>
          <Link href="/hoodies" legacyBehavior><a><li>Hoodies</li></a></Link>
          <Link href="/stickers" legacyBehavior><a><li>Stickers</li></a></Link>
          <Link href="/mugs" legacyBehavior><a><li>Mugs</li></a></Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-7 mx-5 md:top-auto">
        <BsCart3 className='text-2xl md:text-3xl cursor-pointer'/>
      </div>
    </div>
  )
}

export default Navbar