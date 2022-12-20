import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { request } from './request';
import axios from 'axios';


export const PopularMovies = () => {
    const [movies, setMovies] = useState([])

    //vamos a hacer un display de una pelicula a la vez para el header
    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(request.requestPopular).then((response) => {
            setMovies(response.data.results)
        })

    }, [])



    return (
        <>
            <div className='w-full h-[550px] z-0 '>
                <div className='w-full h-full   '>
                    <img className='w-full h-full object-cover opacity-60 ' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt=""
                    />

                </div>
                <div className='text-5xl absolute top-[30%] md:top-[40%] '>
                    <h1 className='p-5 text-white text-3xl md:text-5xl  ' >{movie?.title}</h1>

                    <div className=' md:text-xl  xl: text-2xl text-white flex justify-start items-center gap-4 p-5  '>
                        <button className=' bg-gray-800 cursor-pointer rounded p-2 hover:bg-slate-400 ' >Play</button>
                        <button className=' bg-gray-800 cursor-pointer rounded p-2 hover:bg-slate-400'>Watch Later</button>
                    </div>

                    <div className='text-white flex flex-col p-5' >
                        <span className='text-lg text-slate-300'>{movie?.release_date}</span>
                        <span className='text-xl w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%]  mt-2'>{movie?.overview.slice(0, 200)}...</span>
                    </div>
                </div>


            </div>


        </>

    )
}
