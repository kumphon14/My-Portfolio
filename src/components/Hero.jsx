// Hero.jsx

import React from 'react'

import { ButtonPrimary,ButtonOutline } from './Button'
import { LuDownload } from "react-icons/lu";
import { MdOutlineArrowDownward } from "react-icons/md";

const Hero = () => {
  return (
    <section id='home'className='pt-28 lg:pt-36'>
        <div className='container lg:grid lg:grid-cols-2 items-center lg:gap-5'>
            <div>
                <div className='flex item-center gap-3'>
                    <figure className='img-box w-9 h-9 rounded-lg'>
                        <img 
                            src='/images/avatar-1.jpg'
                            width={40}
                            height={40} 
                            alt='kumphon suwannoppakul portrait'
                            className='img-cover'
                        />
                    </figure>
                    <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
                        <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                            <span className='absolute inset-0 rounded-full  bg-emerald-400 animate-ping'></span>
                        </span>
                        Available for work
                    </div>
                </div>

                <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'>
                    Empowering Ideas into Full-Stack Solutions for Modern Web Development
                </h2>

                <div className='flex items-center gap-3'>
                    <ButtonPrimary
                        href="./images/CV_14-kumphon-F.pdf"
                        target="_blank"
                        label="Download CV"
                        icon={<LuDownload />}
                        classes=" bg-sky-400 hover:bg-sky-300 active:bg-sky-500"
                    />

                    <ButtonOutline
                        href="#about"
                        label="Scroll down"
                        icon={<MdOutlineArrowDownward/>}
                        classes="h-11 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-800"
                    />
                </div>
            </div>

            <div className='hidden lg:block'>
                <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-[#F7B23E] via-[#F7B23E]/40
                to-65% rounded-[60px] overflow-hidden'>
                    <img
                        src='/images/IMG_3472_Original-removebg.png'
                        width={1000}
                        height={700}
                        alt='kumphon'
                        className='myImg'
                    />
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Hero
