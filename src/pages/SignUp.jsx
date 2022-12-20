import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import image from '../../public/assets/bg-login.jpg'
import { UserAuth } from '../context/AuthContext';

export const SignUp = () => {
    const { user, signUp } = UserAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();

    const onHandleSubmit = async (e) => {
        e.preventDefault();

        //esperamos a q el usuario se logee, si no mostramos un error
        try {
            await signUp(email, password)
            navigate("/*")

        } catch (error) {
            console.log("error")
        }
    }
    return (
        <>
            <div className='w-full h-screen'>
                <img className='hidden sm:block object-cover w-full h-full  ' src={image} alt="" />
                <div className=' fixed bg-black/60 top-0 left-0 w-full h-screen px-4 py-24 z-50 '>
                    <div className=' max-w-[450px] h-[500px] bg-black/70 mx-auto rounded flex items-center pt-10  flex-col   '>
                        <p className='text-white text-3xl font-semibold mb-4 '>Sign Up</p>

                        <form
                            onSubmit={onHandleSubmit}
                            className='flex flex-col items-center justify-center gap-6 pt-8  ' >

                            <input
                                //capturamos el valor de este campo y lo seteamos
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-[300px] h-[40px] rounded ' type="email" placeholder='Your e-mail' />
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                className='w-[300px] h-[40px] rounded' type="password" placeholder='Password' />

                            <button type='submit' className='bg-red-600 mt-4 p-2 w-[300px] rounded text-white'>Sign Up</button>
                        </form>



                        <div className='pt-8 flex justify-start items-start text-xl'>
                            <p className='text-white p-2'>Already subscribed? <Link to="/login" className='text-red-600 hover:text-slate-500'>Login</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

