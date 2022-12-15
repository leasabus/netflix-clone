import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


export const RowComponent = ({ title, fetchURL, rowID }) => {

    const [movies, setMovies] = useState([]);

    //devolvemos una llamada a la api diferente para cada request
    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })


    }, [fetchURL])


    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;

    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;

    }


    return (
        <>
            <div className='text-white text-2xl flex justify-center items-center p-6'>{title}</div>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                    onClick={slideLeft}
                    className='bg-white  cursor-pointer rounded-full  relative opacity-50 hover:opacity-100 left-0 cursor-ponter z-10 hidden group-hover:block ' size={40} />
                <div id={'slider' + rowID} className="w-full h-full overflow-x-scroll  whitespace-nowrap scroll-smooth scrollbar-hide  relative">
                    {
                        movies.map((item, id) => (
                            <div key={id} className='w-[180px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' >
                                <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="" />

                                <div className='w-full h-full absolute top-0 hover:bg-black/80 opacity-0 hover:opacity-100'>
                                    <p className='text-white text-xl flex items-center justify-center text-center h-full '>{item?.title.slice(0, 20)}</p>
                                    <span className='text-white top-0 left-0 absolute p-3'><AiOutlineHeart size={24} /></span>
                                </div>
                            </div>

                        ))}
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    className='bg-white  cursor-pointer rounded-full relative opacity-50 hover:opacity-100 left-0 cursor-ponter z-10 hidden group-hover:block ' size={40} />

            </div>
        </>

    )
}
