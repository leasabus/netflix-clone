import React from 'react'
import image from '../assets/bg-login.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { BiError } from 'react-icons/bi';


export const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const { user, logIn } = UserAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await logIn(email, password)
            navigate("/*")

        } catch (error) {

            //msj de error predeterminado por firebase
            setError(error.message)
        }
    }
    return (
        <div className='w-full h-screen'>
            < img className='hidden sm:block object-cover w-full h-full  ' src={image} alt="" />
            <div className=' fixed bg-black/60 top-0 left-0 w-full h-screen px-4 py-24 z-50 '>
                <div className=' max-w-[450px] h-[500px] bg-black/70 mx-auto rounded flex items-center pt-10  flex-col   '>
                    <p className='text-white text-3xl font-semibold  '>Login</p>
                    {error ? <p className='text-white bg-red-600 mt-6  py-2 rounded flex flex-row'><BiError size={24} />{error}</p> : null}

                    <form onSubmit={handleLogin}
                        className='flex flex-col items-center justify-center gap-6 pt-8  '>
                        <input onChange={(e) => setEmail(e.target.value)} className='w-[300px] h-[40px] rounded' type="email" placeholder='Your e-mail account' />
                        <input onChange={(e) => setPassword(e.target.value)} className='w-[300px] h-[40px] rounded' type="password" placeholder='Password' />

                        <button type='submit' className='bg-red-600 mt-4 p-2 w-[300px] rounded text-white'>Login</button>
                    </form>



                    <div className='pt-8 flex justify-start items-start text-xl'>
                        <p className='text-white p-2'>Not subscribed? <Link to="/signup" className='text-red-600 hover:text-slate-500'>Sign up</Link> </p>
                    </div>
                </div>
            </div>
        </div>





    )
}
