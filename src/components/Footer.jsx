import React from 'react'
import footer from '../assets/footer-bg.jpg'
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai'

export const Footer = () => {
    return (
        <div className='w-full h-[300px] md:h-[300px] lg:h-[300px] xl:h-[300px]  text-white mt-6 absolute '>

            <img className='w-full h-full object-cover' src={footer} />


            <div className='absolute top-12 left-0 right-0   '>
                <span span className='text-2xl md:text-3xl xl:text-4xl  flex justify-center items-center text-center p-2' > Developed by Leandro Sabus.</span >
                <span className='text-3xl flex justify-center items-center text-center mt-4 p-2 text-red-600 font-semibold'>Contact Me</span>
                <div className='flex flex-row justify-center items-center mt-4 p-4 gap-6'>
                    <a href="https://www.linkedin.com/in/leandro-sabus-a3873515a/" target="_blank">  <AiOutlineLinkedin size={60} className='hover:text-red-500 cursor-pointer' /> </a>
                    <a href="https://github.com/leasabus" target="_blank"> <AiOutlineGithub size={60} className='hover:text-red-500 cursor-pointer' /> </a>
                    <a href="mailto:leandro.sabus@gmail.com" target="_blank"><AiOutlineMail size={60} className='hover:text-red-500 cursor-pointer' /> </a>
                </div>
            </div >

        </div >
    )
}
