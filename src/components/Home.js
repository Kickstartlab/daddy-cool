import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import chart from '../assets/chart.png';
import top from '../assets/top.png';
import about from '../assets/about.png';
import token from '../assets/token.png';
import community from '../assets/community.png';
import list from '../assets/list.png';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 800,
        });
        Aos.refresh();
    }, [])


    return (
        <div className="bg-yellow-100 font-opensans overflow-hidden text-black-100">

            {/* top section */}

            <div className="lg:px-20 px-5 bg-top relative z-20">
                <div className='container mx-auto'>

                    <Menu />
                    <div data-aos="zoom-in" className="pt-5">
                        <img src={top} alt="Logo" className='flex mx-auto rounded-full lg:w-7/12' />
                    </div>

                </div>
            </div>

            {/* about us section */}

            <div id='about' className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-between items-center gap-x-12 py-12">

                        <div data-aos="fade-left" className="lg:w-1/2 w-full">

                            <h2 className='md:text-5xl text-3xl font-bold text-blue-100 tracking-wider font-junkdog'>
                                ABOUT US
                            </h2>

                            <p className='pt-6 pb-4 font-semibold'>
                                Imagine a crypto memecoin project inspired by Johnny Bravo's "daddy cool" persona. This theme-based venture would embrace the essence of his iconic character, combining elements of charisma, confidence, and style with the exciting world of cryptocurrency.
                            </p>

                            <p className='py-5 lg:leading-loose font-semibold'>
                                The project would leverage Johnny Bravo's appeal to create a unique and engaging community around the memecoin, attracting crypto enthusiasts who appreciate humor, nostalgia, and a touch of retro coolness. With Johnny Bravo as the face of the project, his larger-than-life personality and self-assured charm would undoubtedly bring a wave of attention, turning the venture into a sensation within the crypto space. Join Daddy Cool and play your part as a community to ensure this memecoin becomes the new trend of the year.
                            </p>

                        </div>

                        <div data-aos="zoom-in" className=" md:mt-0 mt-8">
                            <img src={about} alt="Logo" className='w-10/12 lg:float-right sm:flex mx-auto' />
                        </div>

                    </div>
                </div>
            </div>

            {/* tokenomics section */}

            <div id='tokenomics' className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-between items-center gap-x-16 lg:py-16">


                        <div data-aos="zoom-in" className="">
                            <img src={token} alt="Logo" className='' />
                        </div>

                        <div data-aos="fade-left" className="lg:w-1/2 w-full md:mt-0 mt-8 lg:space-y-20 space-y-8">

                            <div className='space-y-10 text-center'>
                                <h2 className='md:text-6xl text-3xl font-bold text-blue-100 tracking-wider font-junkdog'>
                                    TOKENOMICS
                                </h2>

                                <div className='flex items-center justify-center gap-x-12'>
                                    <p className='lg:text-6xl text-3xl uppercase font-bolf font-junkdog  text-center'>Tax</p>

                                    <p className='lg:text-6xl text-3xl font-junkdog text-center'>0/0</p>
                                </div>
                            </div>

                            <div className='space-y-10 text-center'>
                                <h2 className='md:text-6xl text-3xl font-bold text-blue-100 tracking-wider font-junkdog'>
                                    Token Allocation
                                </h2>

                                <div data-aos="zoom-in" className="">
                                    <img src={chart} alt="Logo" className='' />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* community */}

            <div id='community' className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-between items-center gap-x-12 py-12">

                        <div data-aos="fade-left" className="lg:w-1/2 w-full">

                            <h2 className='md:text-5xl text-3xl font-bold text-blue-100 tracking-wider font-junkdog'>
                                Community
                            </h2>

                            <p className='pt-8 pb-4 font-semibold'>
                                Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            </p>

                            <p className='py-5 lg:leading-loose font-semibold'>
                                Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Korem ipsum dolor sit.
                            </p>

                        </div>

                        <div data-aos="zoom-in" className=" md:mt-0 mt-12">
                            <img src={community} alt="Logo" className='w-10/12 lg:float-right sm:flex mx-auto' />
                        </div>

                    </div>
                </div>
            </div>

            {/* roadmap */}

            <div
                id="roadmap"
                className="lg:py-12 py-5 lg:px-8 px-5 container mx-auto"
            >
                <h3 className="md:text-6xl text-2xl font-junkdog font-bold text-center">
                    Road map
                </h3>

                <div className="lg:mt-12 mt-6 rounded-2xl bg-blue-200 lg:p-12 p-6">

                    <div className="h-0.5 w-full bg-white-50 opacity-30">

                    </div>

                    <div className='h-0.5 w-full line -translate-y-0.5'>

                    </div>

                    <div className="lg:flex items-baseline justify-between gap-6 lg:px-20 lg:space-y-0 space-y-6 -mt-2.5">

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#0125EF" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#0125EF" />
                                </svg>

                            </div>

                            <div className="border-l border-white-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-right"
                                className="border-4 border-blue-100 text-blue-100 p-5 lg:w-72"
                            >
                                <h5 className="text-2xl py-3 font-bold font-junkdog tracking-widest">Q1 2021</h5>

                                <div className="space-y-3">
                                    <div className='flex items-center gap-x-2'>
                                        <img src={list} alt='list'></img>
                                        <p>Release website and logo</p>
                                    </div>
                                    <div className='flex items-center gap-x-2'>
                                        <img src={list} alt='list'></img>
                                        <p>Grow community</p>
                                    </div>
                                    <div className='flex items-center gap-x-2'>
                                        <img src={list} alt='list'></img>
                                        <p>Launch the project</p>
                                    </div>
                                    <div className='flex items-center gap-x-2'>
                                        <img src={list} alt='list'></img>
                                        <p>Social media setup</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#0125EF" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#0125EF" />
                                </svg>
                            </div>

                            <div className="border-l border-white-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-right"
                                className="border-4 border-blue-100 text-blue-100 p-5 lg:w-72"
                            >
                                <h5 className="text-2xl py-3 font-bold font-junkdog tracking-widest">Q2 2021</h5>

                                <div className="space-y-3">
                                    <div className='flex items-center gap-x-2'>
                                        <img src={list} alt='list'></img>
                                        <p>Release website and logo</p>
                                    </div>
                                    <div className='flex items-center gap-x-2'>
                                        <img src={list} alt='list'></img>
                                        <p>Grow community</p>
                                    </div>
                                    <div className='flex items-center gap-x-2'>
                                        <img src={list} alt='list'></img>
                                        <p>Launch the project</p>
                                    </div>
                                    <div className='flex items-center gap-x-2'>
                                        <img src={list} alt='list'></img>
                                        <p>Social media setup</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#0125EF" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#0125EF" />
                                </svg>
                            </div>

                            <div className="border-l border-white-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-right"
                                className="border-4 border-blue-100 text-blue-100 p-5 lg:w-72"
                            >
                                <h5 className="text-2xl py-3 font-bold font-junkdog tracking-widest">Q3 2021</h5>

                                <div className="space-y-3">
                                    <div className='flex items-center gap-x-2'>
                                        <img src={list} alt='list'></img>
                                        <p>Release website and logo</p>
                                    </div>
                                    <div className='flex items-center gap-x-2'>
                                        <img src={list} alt='list'></img>
                                        <p>Grow community</p>
                                    </div>
                                    <div className='flex items-center gap-x-2'>
                                        <img src={list} alt='list'></img>
                                        <p>Launch the project</p>
                                    </div>
                                    <div className='flex items-center gap-x-2'>
                                        <img src={list} alt='list'></img>
                                        <p>Social media setup</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div
                                data-aos="zoom-in"
                                className="absolute -mt-3.5 lg:block hidden"
                            >
                                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#0125EF" />
                                    <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#0125EF" />
                                </svg>
                            </div>

                            <div className="border-l border-white-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                            <div
                                data-aos="flip-right"
                                className="border-4 border-blue-100 text-blue-100 p-5 lg:w-72"
                            >
                                <h5 className="text-2xl py-3 font-bold font-junkdog tracking-widest">Q4 2021</h5>

                                <div className="space-y-3">
                                    <div className='flex items-center gap-x-2'>
                                        <img src={list} alt='list'></img>
                                        <p>Release website and logo</p>
                                    </div>
                                    <div className='flex items-center gap-x-2'>
                                        <img src={list} alt='list'></img>
                                        <p>Grow community</p>
                                    </div>
                                    <div className='flex items-center gap-x-2'>
                                        <img src={list} alt='list'></img>
                                        <p>Launch the project</p>
                                    </div>
                                    <div className='flex items-center gap-x-2'>
                                        <img src={list} alt='list'></img>
                                        <p>Social media setup</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    )
}
