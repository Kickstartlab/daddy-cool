import React from 'react'
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import footer from '../assets/footer.png';
import logo_1 from '../assets/logo_1.png';




export default function Footer() {
  return (
    <div className="font-opensans py-5">
      <footer className='container text-black-100 mx-auto lg:px-20 font-opensans px-5'>

        <div className='lg:flex items-center justify-between'>
          <div data-aos="fade-right" className='lg:w-7/12'>
            <div className="space-y-8">
              <h2 className='md:text-4xl text-2xl font-bold text-blue-100 text-left font-junkdog tracking-wider'>
                Disclaimer:
              </h2>

              <div className='font-semibold lg:leading-loose'>
                <p>
                  Daddy Cool Token is a decentralized community-driven project. Please conduct your own research and due diligence before investing in any cryptocurrency. Cryptocurrencies are subject to market risks, and their value may fluctuate.
                </p>

                <p className='pt-2'>
                  <a href='mailto:info@daddycooltoken.com' className='text-blue-100 hover:underline'>info@daddycooltoken.com</a>
                </p>
              </div>

              <div className='flex gap-6 items-center lg:mt-0 mt-6'>

                <a href='https://twitter.com/daddycooltoken?s=21'>
                  <img src={twitter} alt="Twitter" className='' />
                </a>

                <a href='https://t.me/daddycooltoken'>
                  <img src={telegram} alt="Facebook" className='' />
                </a>

              </div>

            </div>
            <p className='py-6 '>© {new Date().getFullYear()} All rights reserved by <a href={logo_1} target='_blank' className='text-blue-100 hover:underline'>daddycooltoken.com</a></p>
          </div>

          <div data-aos="slide-up">
            <img src={footer} alt='footer'></img>
          </div>
        </div>

      </footer>
    </div>

  )
}
