import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import tmovie from '../assets/tmovie.png';
import { AiOutlineClose, AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai';



export const NavBar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(true)
    }

    return (
        <>
            <div className='w-auto h-[70px]'>
                <div className='bg-black text-white hidden  md:flex justify-between items-center p-2 text-2xl  '>
                    <div className='items-center flex flex-row p-4'>
                        <img src={tmovie} width={40} />
                        <span>Tmovies </span>
                    </div>

                    <div className='items-center flex flex-col md:flex-row  gap-4 mr-2' >
                        <Link className='link-items' to="home">Home</Link>
                        <Link className='link-items' to="series">Tv Series</Link>
                        <Link className='link-items' to="movies">Movies</Link>
                    </div>
                </div>

                <div onClick={handleNav} className='flex justify-between items-center p-2 md:hidden cursor-pointer text-white'>
                    <div className='items-center flex flex-row p-4 gap-2' >
                        <img src={tmovie} width={40} />
                        <span className='text-xl'>Tmovies </span>
                    </div>

                    {

                        !nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />
                    }
                </div>

            </div>

            <div className={!nav ? 'absolute z-10  left-0 top-0 w-[60%] h-[450px]   bg-black opacity-90 rounded  ease-in-out duration-500' : 'fixed left-[-100%]  '}>
                <div className='w-full text-3xl  text-white p-4  flex flex-row items-start align-center gap-2 absolute top-[20%]'>
                    <img src={tmovie} width={40} />
                    <span>Tmovies </span>
                </div>
                <div className='items-center justify-center flex flex-col text-white  gap-4 pl-14 absolute top-[40%] text-2xl align-center   ' >
                    <Link className='link-items  hover:text-green-500  ' to="home">Home</Link>
                    <Link className='link-items hover:text-green-500' to="series">Tv Series</Link>
                    <Link className='link-items hover:text-green-500' to="movies">Movies</Link>
                    <button className='p-6 hover:text-slate-500' onClick={closeNav}><AiFillCloseCircle size={30} /></button>
                </div>
            </div>
        </>
    )
}
