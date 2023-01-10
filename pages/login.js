import React from 'react'
import Link from 'next/link'

const Login = () => {
  return (
    <div className="flex w-[90vw] md:w-[500px] mx-auto items-center justify-center py-12 px-4 sm:px-6 lg:px-8 my-10 md:my-[100px] shadow-md rounded-md bg-green-100">
      <div className="w-full max-w-md space-y-8 ">
        <div>
          <img className="mx-auto h-12 w-auto" src="favicon.ico" alt="Your Company"/>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link href={"/signup"} className="font-medium text-[#b1fc31] hover:text-[#82bb20] cursor-pointer"> Signup</Link>
            </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input id="email" name="email" type="email" autoComplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#b1fc31] focus:outline-none focus:ring-[#82bb20] sm:text-sm" placeholder="Email address"/>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input id="password" name="password" type="password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#b1fc31] focus:outline-none focus:ring-[#82bb20] sm:text-sm" placeholder="Password"/>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-[#b1fc31] focus:ring-[#82bb20]"/>
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
              </div>

              <div className="text-sm">
                <Link href={"/forgot"} className="font-medium text-[#b1fc31] hover:text-[#82bb20]">Forgot your password?</Link>
              </div>
            </div>

            <div>
              <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#b1fc31] py-2 px-4 text-sm font-medium text-white hover:bg-[#82bb20] focus:outline-none focus:ring-2 focus:ring-[#b1fc31] focus:ring-offset-2">
                Sign In
              </button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login