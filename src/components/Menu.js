import React, { useState } from 'react'
import logo from '../assets/logo.png';



export default function Menu() {

  const [show, setShow] = useState(false);


  return (

    <header>

      <div className="lg:flex hidden items-center justify-between font-opensans h-28">
        <a href="/" className="logo lg:my-12">
          <img src={logo} alt="Logo" />
        </a>

        <nav>
          <ul className="text-md flex justify-center gap-12 items-center text-black-100">
            <li><a href="/" className="font-semibold">Home</a></li>
            <li><a href="#about" className="font-semibold">About</a></li>
            <li><a href="#tokenomics" className="font-semibold">Tokenomics</a></li>
            <li><a href="#roadmap" className="font-semibold">Roadmap</a></li>
            <li><a href="https://t.me/daddycooltoken" className="font-semibold">Join us</a></li>
          </ul>
        </nav>

        <a href="/">
          <button className="bg-blue-100 rounded-lg py-3 lg:px-8 px-4 mt-5 font-semibold text-white-100">
            Buy Now
          </button>
        </a>
      </div>

      <div className="lg:hidden flex items-center justify-between pt-5 font-opensans">
        <a href="/" className="text-black-100">
          <img src={logo} alt="Logo" className='w-9/12' />
        </a>

        <button onClick={() => setShow(!show)} className="nav cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>

        </button>
      </div>

      {
        show ? <div className="sidebar fixed top-0 bottom-0 left-0 lg:left-0 p-2 w-3/4 overflow-y-auto text-center font-opensans font-semibold bg-yellow-100 z-20">

          <div className="mt-3 px-3 mb-12">
            <a href="/" className="text-black-100">
              <img src={logo} alt="Logo" className='w-10/12' />
            </a>
          </div>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center text-black-100">
            <a href="/" className="text-lg ml-4 font-semibold font-junkdog tracking-wider">Home</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center text-black-100">
            <a href="#about" className="text-lg ml-4 font-semibold font-junkdog tracking-wider">About</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center text-black-100">
            <a href="#tokenomics" className="text-lg ml-4 font-semibold font-junkdog tracking-wider">Tokenomics</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center text-black-100">
            <a href="#roadmap" className="text-lg ml-4 font-semibold font-junkdog tracking-wider">Roadmap</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center text-black-100">
            <a href="https://t.me/daddycooltoken" className="text-lg ml-4 font-semibold font-junkdog tracking-wider">Join Us</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center bg-blue-100 rounded-md">
            <a href="/" className="text-lg ml-4 font-semibold text-white-100 font-junkdog tracking-wider">Buy Now</a>
          </button>
        </div> : null
      }


    </header >
  )
}
