import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Movie } from './Movie';


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
            <div className='text-white font-bold text-2xl flex justify-center items-center p-6'>{title}</div>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                    onClick={slideLeft}
                    className='bg-white  cursor-pointer rounded-full  relative opacity-50 hover:opacity-100 left-0 cursor-ponter z-10 hidden group-hover:block ' size={40} />
                <div id={'slider' + rowID} className="w-full h-full overflow-x-scroll  whitespace-nowrap scroll-smooth scrollbar-hide  relative">
                    {
                        movies.map((item, id) => (
                            <Movie key={id} item={item} />
                        ))}
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    className='bg-white  cursor-pointer rounded-full relative opacity-50 hover:opacity-100 left-0 cursor-ponter z-10 hidden group-hover:block ' size={40} />

            </div>
        </>

    )
}
