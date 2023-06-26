import React from 'react'
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import footer from '../assets/footer.png';




export default function Footer() {
  return (
    <div className="font-opensans py-5">
      <footer className='container text-black-100 mx-auto lg:px-20 font-opensans px-5'>

        <div className='lg:flex items-center justify-between'>
          <div data-aos="fade-right" className='lg:w-7/12'>
            <div className="space-y-8">
              <h2 className='md:text-4xl text-2xl font-opensans font-bold text-blue-100 text-left'>
                Don't miss out, Stay updated
              </h2>

              <div className="py-1 lg:pl-6 pr-1 w-full lg:bg-yellow-100 lg:space-y-0 flex items-center justify-between rounded-full border-2 border-blue-100">
                <input type="email" placeholder="Enter your email" id="email" required="" className="lg:p-0 py-2 px-3 lg:rounded-none rounded-full bg-yellow-100 focus:ring-0 focus:outline-none placeholder-blue-100" />

                <button className='text-white-100 uppercase font-semibold lg:px-12 px-2 lg:py-3 py-2 bg-blue-100 rounded-full'>
                  Subcribe
                </button>
              </div>

              <div className=''>
                <p>
                  Don’t hesitate to subscribe to latest news about ICo markets as well as crucial financial knowledge to become successful investors globally
                </p>

                {/* <p className='pt-2'>
                  Get in touch: <a href='mailto:decentraprotocolteam@gmail.com' className='text-purple-100'>decentraprotocolteam@gmail.com</a>
                </p> */}
              </div>

              <div className='flex gap-6 items-center lg:mt-0 mt-6'>

                <a href='/'>
                  <img src={twitter} alt="Twitter" className='' />
                </a>

                <a href='/'>
                  <img src={telegram} alt="Facebook" className='' />
                </a>

              </div>

            </div>
            <p className='py-6 '>© {new Date().getFullYear()} All rights reserved by Daddy Cool.</p>
          </div>

          <div data-aos="slide-up">
            <img src={footer} alt='footer'></img>
          </div>
        </div>

      </footer>
    </div>

  )
}
