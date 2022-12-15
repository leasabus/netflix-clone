import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import request from './request';

export const TrendingMovies = () => {

    const [movies, setMovies] = useState([]);


    useEffect(() => {
        axios.get(request.requestUncoming).then((response) => {
            setMovies(response.data.results)
        })


    }, [])

    console.log(movies)




    return (
        <div className='max-w-[1240px] h-[500px]'>
            <h1 className='text-white text-2xl'>Trending Movies</h1>




            <div className='grid grid-cols-3  gap-4 p-4 '>
                <div className='w-full h-full   '>
                    <img className='w-full h-full object-cover md:opacity-60 ' src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`} alt={movies?.title}
                    />

                </div>

                <div className='w-[350px] h-[400px] bg-white rounded   p-2 '>
                    <h4 className='text-black flex items-center justify-center '>{movies?.title}</h4>
                </div>

                <div className='w-[350px] h-[400px] bg-white rounded   p-2 '>
                    <h4 className='text-black flex items-center justify-center '>{movies?.title}</h4>
                </div>


            </div>
        </div>
    )
}
