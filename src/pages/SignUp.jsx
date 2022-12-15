import React from 'react'
import image from '../assets/bg-login.jpg'

export const SignUp = () => {
    return (
        <>
            <div className='w-full h-screen'>
                <img className='hidden sm:block object-cover w-full h-full  ' src={image} alt="" />
                <div className='fixed bg-black/60 top-0 left-0 w-full h-screen px-4 py-24 z-50 '>
                    <div className='max-w-[450px] h-[500px] bg-black/70 mx-auto rounded flex items-center p-12   flex-col'>
                        <p className='text-white text-3xl font-semibold  '>Login</p>

                        <form className='flex flex-col gap-6 pt-8  '>
                            <input className='w-[300px] h-[40px] rounded' type="email" placeholder='email' />
                            <input className='w-[300px] h-[40px] rounded' type="password" placeholder='password' />

                        </form>


                        <button className='bg-red-600 mt-8 p-2 w-[300px] rounded text-white'>Login</button>
                        <p className='text-white'>Save account</p>
                    </div>
                </div>
            </div>
        </>
    )
}

