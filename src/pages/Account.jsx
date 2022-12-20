
import image from '../assets/bg-login.jpg'
import { SavedShows } from '../components/SavedShows'
import React from 'react';


export const Account = () => {


    return (
        <>
            <div className='h-full text-white '>
                <img src={image} alt="image" className='w-full h-[300px] md:h-[450px] object-cover opacity-50' />

                <div className='absolute top-[30%] md:top-[40%] left-[40%] right-[40%]  '>
                    <h1 className=' text-3xl md:text-4xl font-bold'>My Movies</h1>
                </div>
            </div>
            <SavedShows />



        </>
    )
}
